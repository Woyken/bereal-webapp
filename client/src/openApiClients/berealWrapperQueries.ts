import { createMutation, createQuery } from "@tanstack/solid-query";
import { useUserToken } from "../components/userTokenProvider";
import { throwInline } from "../utils/throwInline";
import { useBerealWrapperClient } from "./berealWrapperClient";

const usePropsHeadersAuthorization = () => {
  const { token } = useUserToken();
  return () => ({
    headers: {
      authorization: token() ?? throwInline(new Error("token not found")),
    },
  });
};

export const useFriendsPostsQuery = () => {
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createQuery(
    () => ["feeds", "friends"],
    () => client.api.getFriends(requestProps()).then((r) => r.data)
  );
};

export const useDiscoveryPostsQuery = () => {
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createQuery(
    () => ["feeds", "discovery"],
    () => client.api.getDiscovery(requestProps()).then((r) => r.data)
  );
};

export const useMemoryPostsQuery = () => {
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createQuery(
    () => ["feeds", "memory"],
    () => client.api.getMemories(requestProps()).then((r) => r.data)
  );
};

export const useLoginSendVerificationMutation = () => {
  const client = useBerealWrapperClient();
  return createMutation(({ phoneNumber }: { phoneNumber: string }) =>
    client.api
      .postSendVerificationCode({
        phoneNumber,
      })
      .then((r) => r.data)
  );
};

export const useLoginRefreshTokenMutation = () => {
  const client = useBerealWrapperClient();
  return createMutation(({ refreshToken }: { refreshToken: string }) => {
    return client.api
      .postRefreshToken({
        refresh_token: refreshToken,
      })
      .then((r) => r.data);
  });
};

export const useLoginVerifyPhoneNumberMutation = () => {
  const client = useBerealWrapperClient();
  return createMutation(
    ({ code, sessionInfo }: { code: string; sessionInfo: string }) => {
      return client.api
        .postVerifyPhoneNumber({
          code,
          sessionInfo,
        })
        .then((r) => r.data);
    }
  );
};
