import {
  Box,
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
import { useReactiveMutationProps } from "../hooks/reactiveQuery";
import { useLoadingToast, useSuccessToast } from "../hooks/toasts";
import {
  usePersonMeQuery,
  useRealmojiMutation,
} from "../openApiClients/berealWrapperQueries";
import AddReactionIcon from "./icons/addReactionIcon";

const FloatingRealmoji = ({ postId }: { postId: string }) => {
  const [activeRealmojiReactionModal, setActiveRealmojiReactionModal] =
    createSignal(false);

  const handleOpenRealmojiReactions = () => {
    setActiveRealmojiReactionModal(true);
  };

  const meQuery = usePersonMeQuery();
  const realmojiMutation = useRealmojiMutation();
  const { isSuccess, isLoading, isError } =
    useReactiveMutationProps(realmojiMutation);
  useLoadingToast(isLoading, "Setting Realmoji...");
  useSuccessToast(isSuccess, "Realmoji set");
  useSuccessToast(isError, "Failed to set Realmoji");

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
