import { createMutation, createQuery } from "@tanstack/solid-query";
import { useUserToken } from "../components/userTokenProvider";
import { throwInline } from "../utils/throwInline";
import { useBerealWrapperClient } from "./berealWrapperClient";

const useAccessToken = () => {
  const { token } = useUserToken();
  const accessToken = token();
  if (!accessToken) throw new Error("no token");
  return accessToken;
};

const usePropsHeadersAuthorization = () => {
  return {
    headers: {
      authorization: useAccessToken(),
    },
  };
};

export const useFriendsPostsQuery = () =>
  createQuery(
    () => ["feeds", "friends"],
    () =>
      useBerealWrapperClient()
        .api.getFriends(usePropsHeadersAuthorization())
        .then((r) => r.data)
  );

export const useDiscoveryPostsQuery = () =>
  createQuery(
    () => ["feeds", "friends"],
    () =>
      useBerealWrapperClient()
        .api.getDiscovery(usePropsHeadersAuthorization())
        .then((r) => r.data)
  );

export const useMemoryPostsQuery = () =>
  createQuery(
    () => ["feeds", "friends"],
    () =>
      useBerealWrapperClient()
        .api.getMemories(usePropsHeadersAuthorization())
        .then((r) => r.data)
  );

export const useLoginSendVerificationMutation = () => {
  return createMutation(({ phoneNumber }: { phoneNumber: string }) =>
    useBerealWrapperClient()
      .api.postSendVerificationCode({
        phoneNumber,
      })
      .then((r) => r.data)
  );
};

export const useLoginRefreshTokenMutation = () => {
  const { refreshToken } = useUserToken();
  return createMutation(() => {
    const refreshTokenValue =
      refreshToken() ?? throwInline(new Error("refresh token not set"));
    return useBerealWrapperClient()
      .api.postRefreshToken({
        refresh_token: refreshTokenValue,
      })
      .then((r) => r.data);
  });
};

export const useLoginVerifyPhoneNumberMutation = () =>
  createMutation(
    ({ code, sessionInfo }: { code: string; sessionInfo: string }) => {
      return useBerealWrapperClient()
        .api.postVerifyPhoneNumber({
          code,
          sessionInfo,
        })
        .then((r) => r.data);
    }
  );
