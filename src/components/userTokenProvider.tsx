import { createMutation } from "@tanstack/solid-query";
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
import envConfig from "../envConfig";
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

type RefreshTokenResponse = {
  access_token: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
};

const useRefreshTokenMutation = () => {
  return createMutation(async ({ refreshToken }: { refreshToken: string }) => {
    const response = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${envConfig.loginKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          refresh_token: refreshToken,
          grant_type: "refresh_token",
        }),
        headers: {
          "x-ios-bundle-identifier": envConfig.iosBundleId,
        },
      }
    );
    return (await response.json()) as RefreshTokenResponse;
  });
};

type SubmitVerificationCodeResponse = {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  isNewUser: false;
  phoneNumber: string;
};

const useSubmitVerificationCodeMutation = () => {
  return createMutation(
    async ({ sessionInfo, code }: { sessionInfo: string; code: string }) => {
      const response = await fetch(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPhoneNumber?key=${envConfig.loginKey}`,
        {
          method: "POST",
          body: JSON.stringify({
            sessionInfo,
            code,
            operation: "SIGN_UP_OR_IN",
          }),
          headers: {
            "x-ios-bundle-identifier": envConfig.iosBundleId,
          },
        }
      );
      return (await response.json()) as SubmitVerificationCodeResponse;
    }
  );
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

  const mut = useRefreshTokenMutation();
  const mut2 = useSubmitVerificationCodeMutation();

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
          const rToken = refreshToken();
          if (!rToken) throw new Error("Refresh token not set");
          mut.mutate({ refreshToken: rToken });
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
