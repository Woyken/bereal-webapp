import {
  createMutation,
  createQuery,
  useQueryClient,
} from "@tanstack/solid-query";
import { useUserToken } from "../components/userTokenProvider";
import { throwInline } from "../utils/throwInline";
import { useBerealWrapperClient } from "./berealWrapperClient";
import { BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost, BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji } from "./generated/berealWrapper";

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
    ({ signal }) =>
      client.api
        .getFeedsFriends({ ...requestProps(), signal })
        .then((r) => r.data),
    { suspense: true }
  );
};

export const useDiscoveryPostsQuery = () => {
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createQuery(
    () => ["feeds", "discovery"],
    ({ signal }) =>
      client.api
        .getFeedsDiscovery(undefined, { ...requestProps(), signal })
        .then((r) => r.data)
  );
};

export const useMemoryPostsQuery = () => {
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createQuery(
    () => ["feeds", "memory"],
    ({ signal }) =>
      client.api
        .getFeedsMemories(undefined, { ...requestProps(), signal })
        .then((r) => r.data)
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
    async ({ code, sessionInfo }: { code: string; sessionInfo: string }) => {
      const r = await client.api.postVerifyPhoneNumber({
        code,
        sessionInfo,
      });
      return r.data;
    }
  );
};

export const usePersonMeQuery = () => {
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createQuery(
    () => ["getPersonMe"],
    async ({ signal }) => {
      const r = await client.api.getPersonMe({ ...requestProps(), signal });
      return r.data;
    },
    { suspense: true }
  );
};

export const useRealmojiMutation = () => {
  const queryClient = useQueryClient();
  const client = useBerealWrapperClient();
  const requestProps = usePropsHeadersAuthorization();
  return createMutation(
    ({ postId, emoji }: { postId: string; emoji: string }) => {
      return client.api
        .putContentRealmojis({ postId, emoji }, requestProps())
        .then((r) => r.data);
    },
    {
      onSuccess(data, variables, context) {
        queryClient.setQueryData<
          BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost[]
        >(["feeds", "friends"], (posts) => {
          if (!posts) return posts;
          const filteredPosts = [
            ...(posts?.map((post) => {
              if (post.id !== variables.postId) return post;

              const filteredRealmojis = (post.realMojis?.map((realmoji) => {
                if (realmoji.userName !== data.user?.username) return realmoji;

                return {
                  ...realmoji,
                  emoji: data.emoji,
                  id: data.id,
                  uri: data.media?.url,
                } satisfies BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji;
              }) ?? []);

              if (filteredRealmojis.length === 0) filteredRealmojis.push({
                emoji: data.emoji,
                id: data.id,
                uri: data.media?.url,
                userName: data.user?.username,
                uid: data.id,
                type: data.emoji,
                date: {_nanoseconds: 0, _seconds: 0}
              } satisfies BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji)

              return {
                ...post,
                realMojis: filteredRealmojis
              };
            }) ?? []),
          ];
          return filteredPosts;
        });
      },
    }
  );
};
