import { createSignal, Show } from "solid-js";
import {
  BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp,
  BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost,
} from "../openApiClients/generated/berealWrapper";
import BerealFeedImage from "./berealFeedImage";
import RealmojiSquished from "./realmojiSquished";
import css from "./feedCard.module.css";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Modal,
  Stack,
  Text,
  VStack,
} from "@hope-ui/solid";

const isToday = (someDate: Date) => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

const getTimePostedText = (
  creationDate: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp,
  lateInSeconds: number
) => {
  const postedDate = new Date(
    creationDate._seconds * 1000 + creationDate._nanoseconds / 1000 / 1000
  );

  if (lateInSeconds >= 60 * 60)
    return Math.floor(lateInSeconds / (60 * 60)) + "h late";
  if (lateInSeconds >= 60) return Math.floor(lateInSeconds / 60) + "min late";
  if (lateInSeconds) return lateInSeconds + "s late";
  const timeStr = postedDate.toLocaleTimeString();
  if (isToday(postedDate)) return "Today at " + timeStr;
  return "Yesterday at " + timeStr;
};

const FeedCard = ({
  item,
}: {
  item: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost;
}) => {
  const postedAt = getTimePostedText(
    item.creationDate ?? { _nanoseconds: 0, _seconds: 0 },
    item.lateInSeconds ?? 0
  );

  const [isCommentsOpen, setIsCommentsOpen] = createSignal(false);

  return (
    <Box
      bg="$primary8"
      maxW="$sm"
      borderColor="$neutral6"
      borderWidth="1px"
      borderRadius="$lg"
    >
      <>
        <HStack direction="row" alignItems="center" spacing={1}>
          <Avatar
            src={item.user?.profilePicture?.url}
            name={item.user?.username}
          />
          <VStack spacing={-1}>
            <Text color="text.primary">{item.user?.username}</Text>
            <Show when={item.location}>
              <Text color="text.secondary">
                {item.location?._latitude} {item.location?._longitude}
              </Text>
            </Show>
          </VStack>
          <VStack
            // override stack styles and push it to end
            marginLeft="auto"
            alignSelf="center"
          >
            <Show when={postedAt}>
              <Text fontSize="0.7em" color="text.secondary">
                {postedAt}
              </Text>
            </Show>
          </VStack>
        </HStack>
        <div class={css.feedPostImageWrapper}>
          <BerealFeedImage
            primaryUrl={item.photoURL!}
            secondaryUrl={item.secondaryPhotoURL!}
          />
          <RealmojiSquished realmojis={item.realMojis} />
        </div>
        <Show when={item.caption}>
          <Text color="text.secondary">{item.caption}</Text>
        </Show>
      </>
      <>
        <Show when={item.comment?.length}>
          <Modal
            opened={isCommentsOpen()}
            onClose={() => setIsCommentsOpen((p) => !p)}
          >
            <div>test</div>
          </Modal>
          <Button onClick={() => setIsCommentsOpen((p) => !p)} size="small">
            Comments {item.comment?.length}
          </Button>
        </Show>
      </>
    </Box>
  );
};

export default FeedCard;
