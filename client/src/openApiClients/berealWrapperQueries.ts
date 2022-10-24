import { createQuery } from "@tanstack/solid-query";
import { useUserToken } from "../components/userTokenProvider";
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

export const useFriendsPostsQuery = () => {
  return createQuery(
    () => ["feeds", "friends"],
    () =>
      useBerealWrapperClient()
        .api.getFriends(usePropsHeadersAuthorization())
        .then((r) => r.data)
  );
};

export const useDiscoveryPostsQuery = () => {
  return createQuery(
    () => ["feeds", "friends"],
    () =>
      useBerealWrapperClient()
        .api.getDiscovery(usePropsHeadersAuthorization())
        .then((r) => r.data)
  );
};

export const useMemoryPostsQuery = () => {
  return createQuery(
    () => ["feeds", "friends"],
    () =>
      useBerealWrapperClient()
        .api.getMemories(usePropsHeadersAuthorization())
        .then((r) => r.data)
  );
};
