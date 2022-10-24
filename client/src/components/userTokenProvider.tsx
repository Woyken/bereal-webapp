import {
  Accessor,
  createContext,
  createEffect,
  createMemo,
  createSignal,
  ParentComponent,
  Show,
  useContext,
} from "solid-js";
import {
  useLoginRefreshTokenMutation,
  useLoginVerifyPhoneNumberMutation,
} from "../openApiClients/berealWrapperQueries";
import parseJwt from "../utils/jwt";
import { throwInline } from "../utils/throwInline";
import TempLoginPage from "./tempLoginPage";

const noImpl = () => throwInline(new Error("no provider"));

const ctx = createContext<{
  token: Accessor<string | undefined>;
  refreshToken: Accessor<string | undefined>;
  executeRefreshToken: () => void;
  setTokenFromVerificationCode: (props: {
    sessionInfo: string;
    code: string;
  }) => void;
}>({
  token: noImpl,
  refreshToken: noImpl,
  executeRefreshToken: noImpl,
  setTokenFromVerificationCode: noImpl,
});

export const useUserToken = () => {
  const token = useContext(ctx);
  return token;
};

export const UserTokenProvider: ParentComponent = (props) => {
  const [token, setToken] = createSignal(
    localStorage.getItem("token") ?? undefined
  );
  const [refreshToken, setRefreshToken] = createSignal(
    localStorage.getItem("refreshToken") ?? undefined
  );

  const parsedJwt = createMemo(() => {
    const t = token();
    return t ? parseJwt(t) : undefined;
  });

  const isTokenValid = () => {
    const parsed = parsedJwt();
    if (!parsed) return false;
    if (parsed.exp > Date.now() / 1000 + 2 * 60) return true;
    return false;
  };

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

  const mut = useLoginRefreshTokenMutation();
  const mut2 = useLoginVerifyPhoneNumberMutation();

  createEffect(() => {
    if (!mut.data) return;
    setToken(mut.data.access_token);
    setRefreshToken(mut.data.refresh_token);
  });

  createEffect(() => {
    if (!mut2.data) return;
    setToken(mut2.data.idToken);
    setRefreshToken(mut2.data.refreshToken);
  });

  return (
    <ctx.Provider
      value={{
        token,
        refreshToken,
        executeRefreshToken() {
          mut.mutate();
        },
        setTokenFromVerificationCode({ code, sessionInfo }) {
          mut2.mutate({ code, sessionInfo });
        },
      }}
    >
      <Show when={!isTokenValid()}>
        <TempLoginPage />
      </Show>
      <Show when={isTokenValid()}>{props.children}</Show>
    </ctx.Provider>
  );
};
