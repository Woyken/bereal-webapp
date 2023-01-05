import { createEffect, createMemo, createSignal, For, Show } from "solid-js";
import {
  BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseLocation,
  BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp,
  BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost,
} from "../openApiClients/generated/berealWrapper";
import BerealFeedImage from "./berealFeedImage";
import RealmojiSquished from "./realmojiSquished";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@hope-ui/solid";
import { useReverseGeocodeQuery } from "../openApiClients/arcgisQueries";
import FloatingRealmoji from "./floatingRealmoji";

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

const useLocationText = (
  location?: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseLocation
) => {
  const [reversedGeolocationText, setReversedGeolocationText] =
    createSignal<string>();

  if (location?._longitude && location._latitude) {
    const reverseGeolocationQuery = useReverseGeocodeQuery(
      location._longitude,
      location._latitude
    );
    createEffect(() => {
      if (!reverseGeolocationQuery.data) return;
      const address = reverseGeolocationQuery.data.address;
      setReversedGeolocationText(`${address.City}, ${address.CntryName}`);
    });
  }

  const locationText = createMemo(
    () =>
      reversedGeolocationText() ??
      (location ? `${location._latitude},${location._longitude}` : undefined)
  );

  return locationText;
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

  const locationText = useLocationText(item.location);

  const [isCommentsOpen, setIsCommentsOpen] = createSignal(false);

  return (
    <Box
      bg="$neutral3"
      maxW="$md"
      borderColor="$neutral4"
      borderWidth="1px"
      borderRadius="$lg"
    >
      <HStack margin="$2" direction="row" spacing="$1">
        <Avatar
          src={item.user?.profilePicture?.url}
          name={item.user?.fullname ?? item.user?.username}
        />
        <VStack alignItems="start">
          <Text>{item.user?.username}</Text>
          <Show when={locationText()}>
            <Text
              color="$neutral11"
              onclick={() => {
                const locationStr = encodeURIComponent(
                  `${item.location?._latitude},${item.location?._longitude}`
                );
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${locationStr}`,
                  "_blank"
                );
              }}
            >
              {locationText()}
            </Text>
          </Show>
        </VStack>
        <VStack marginLeft="auto" alignSelf="center">
          <Show when={postedAt}>
            <Text size="sm" color="$neutral11">
              {postedAt}
            </Text>
          </Show>
        </VStack>
      </HStack>
      <Box position="relative">
        <BerealFeedImage
          primaryUrl={item.photoURL!}
          secondaryUrl={item.secondaryPhotoURL!}
        />
        <RealmojiSquished realmojis={item.realMojis} />
        <FloatingRealmoji postId={item.id!} />
      </Box>
      <VStack margin="$2" alignItems="start">
        {/* Caption */}
        <Show when={item.caption}>
          <Text>{item.caption}</Text>
        </Show>
        {/* Comments */}
        <Show when={item.comment?.length}>
          <Modal
            opened={isCommentsOpen()}
            onClose={() => setIsCommentsOpen((p) => !p)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>Comments</ModalHeader>
              <ModalBody>
                <For each={item.comment}>
                  {(comment) => (
                    <Stack gap={8}>
                      <Avatar
                        src={comment.user?.profilePicture?.url}
                        name={comment.user?.fullname ?? comment.user?.username}
                      ></Avatar>
                      <Text>{comment.text}</Text>
                    </Stack>
                  )}
                </For>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsCommentsOpen((p) => !p)}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button onClick={() => setIsCommentsOpen((p) => !p)} variant="ghost">
            View all {item.comment?.length} comments
          </Button>
        </Show>
      </VStack>
    </Box>
  );
};

export default FeedCard;
