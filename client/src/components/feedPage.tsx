import { Box, CircularProgress, Stack, VStack } from "@hope-ui/solid";
import { For, Suspense } from "solid-js";
import useRequireLogin from "../hooks/requireLogin";
import { useFriendsPostsQuery } from "../openApiClients/berealWrapperQueries";
import FeedCard from "./feedCard";

const FeedPage = () => {
  useRequireLogin();

  const friendsPosts = useFriendsPostsQuery();

  return (
    <Box>
      <VStack gap='$2' alignItems="center" overflow="scroll">
        <Suspense fallback={<CircularProgress />}>
          <For each={friendsPosts.data}>
            {(item) => <FeedCard item={item} />}
          </For>
        </Suspense>
      </VStack>
    </Box>
  );
};

export default FeedPage;
