import {
  Accessor,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  ParentComponent,
  Setter,
  useContext,
} from "solid-js";
import { useReactiveMutationProps } from "../hooks/reactiveQuery";
import { useLoadingToast, useSuccessToast } from "../hooks/toasts";
import { useLoginRefreshTokenMutation } from "../openApiClients/berealWrapperQueries";
import parseJwt from "../utils/jwt";

const ctx = createContext<{
  token: Accessor<string | undefined>;
  setToken: Setter<string | undefined>;
  refreshToken: Accessor<string | undefined>;
  setRefreshToken: Setter<string | undefined>;
}>();

export const useUserToken = () => {
  const token = useContext(ctx);
  if (!token) throw new Error("user token context not found");

  return token;
};

export const UserTokenProvider: ParentComponent = (props) => {
  const [token, setToken] = createSignal(
    localStorage.getItem("token") ?? undefined
  );
  const [refreshToken, setRefreshToken] = createSignal(
    localStorage.getItem("refreshToken") ?? undefined
  );

  createEffect(() => {
    const t = token();
    if (!t) return;
    localStorage.setItem("token", t);
  });

  createEffect(() => {
    const rt = refreshToken();
    if (!rt) return;
    localStorage.setItem("refreshToken", rt);
  });

  const parsedJwt = createMemo(() => {
    const t = token();
    return t ? parseJwt(t) : undefined;
  });

  const isTokenValid = () => {
    const parsed = parsedJwt();
    if (!parsed) return false;
    if (parsed.exp > Date.now() / 1000 + 1 * 60) return true;
    return false;
  };

  return (
    <ctx.Provider
      value={{
        token,
        setToken,
        refreshToken,
        setRefreshToken,
      }}
    >
      <RefreshTokenAutomatically />
      {props.children}
    </ctx.Provider>
  );
};

const RefreshTokenAutomatically = () => {
  const { token, refreshToken, setToken, setRefreshToken } = useUserToken();
  const parsedJwt = createMemo(() => {
    const t = token();
    return t ? parseJwt(t) : undefined;
  });

  const isTokenValid = () => {
    const parsed = parsedJwt();
    if (!parsed) return false;
    if (parsed.exp > Date.now() / 1000 + 1 * 60) return true;
    return false;
  };

  const tokenExpiresAtMs = () => {
    const parsed = parsedJwt();
    if (!parsed) return;
    return parsed.exp * 1000;
  };

  const refreshTokenMutation = useLoginRefreshTokenMutation();
  const { isSuccess, isLoading, isError } =
    useReactiveMutationProps(refreshTokenMutation);
  useLoadingToast(isLoading, "Refreshing token...");
  useSuccessToast(isSuccess, "Success refreshing token");
  useSuccessToast(isError, "Failed to refresh token");

  createEffect(() => {
    if (!refreshTokenMutation.data) return;
    setToken(refreshTokenMutation.data.access_token);
    setRefreshToken(refreshTokenMutation.data.refresh_token);
  });

  createEffect(() => {
    const expiresAt = tokenExpiresAtMs();
    if (!expiresAt) return;
    const rt = refreshToken();
    if (!rt) return;
    if (isTokenValid()) {
      // Token still valid, check later
      // schedule for 2 minutes before expiration
      const timeout = setTimeout(() => {
        refreshTokenMutation.mutate({ refreshToken: rt });
      }, expiresAt - Date.now() - 1000 * 60 * 2);
      onCleanup(() => clearTimeout(timeout));
      return;
    }
    // token is not valid anymore
    refreshTokenMutation.mutate({ refreshToken: rt });
  });

  return <></>;
};
