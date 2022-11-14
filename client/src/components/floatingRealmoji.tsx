import {
  Box,
  css,
  IconButton,
  Modal,
  Avatar,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@hope-ui/solid";
import { createSignal, For } from "solid-js";
import {
  usePersonMeQuery,
  useRealmojiMutation,
} from "../openApiClients/berealWrapperQueries";
import AddReactionIcon from "./icons/addReactionIcon";

const addReactionStyles = css({
  position: "absolute",
  top: 0,
  right: 0,
  "z-index": 1,
  transform: "scale(0.3)",
  "transform-origin": "0 0",
  margin: "3%",
  width: "100%",
  borderRadius: "$3xl",
});

const FloatingRealmoji = ({ postId }: { postId: string }) => {
  const [activeRealmojiReactionModal, setActiveRealmojiReactionModal] =
    createSignal(false);

  const handleOpenRealmojiReactions = () => {
    setActiveRealmojiReactionModal(true);
  };

  const meQuery = usePersonMeQuery();
  const realmojiMutation = useRealmojiMutation();

  return (
    <Box
      position="absolute"
      bottom="$2"
      right="$5"
      display="flex"
      flexDirection="row-reverse"
      justifyContent="start"
    >
      <IconButton
        size="xl"
        variant="ghost"
        aria-label="Add reaction"
        icon={<AddReactionIcon />}
        onClick={handleOpenRealmojiReactions}
      />
      <Modal
        opened={activeRealmojiReactionModal()}
        onClose={() => setActiveRealmojiReactionModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>React with your realmoji</ModalHeader>
          <ModalBody>
            <For each={meQuery.data?.realmojis}>
              {(realmoji) => (
                <Stack gap={8}>
                  <Avatar
                    onClick={() => {
                      realmojiMutation.mutate({
                        postId,
                        emoji: realmoji.emoji,
                      });
                      setActiveRealmojiReactionModal(false);
                    }}
                    src={realmoji.media.url}
                    name={realmoji.emoji}
                  ></Avatar>
                  <Text>{realmoji.emoji}</Text>
                </Stack>
              )}
            </For>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setActiveRealmojiReactionModal((p) => !p)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        <div>test</div>
      </Modal>
    </Box>
  );
};

export default FloatingRealmoji;
