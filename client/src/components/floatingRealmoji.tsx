import {
  Box,
  IconButton,
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
} from "@hope-ui/solid";
import { createSignal, For } from "solid-js";
import { useReactiveMutationProps } from "../hooks/reactiveQuery";
import { useErrorToast, useLoadingToast, useSuccessToast } from "../hooks/toasts";
import {
  usePersonMeQuery,
  useRealmojiMutation,
} from "../openApiClients/berealWrapperQueries";
import AddReactionIcon from "./icons/addReactionIcon";
import { RealmojiWithIcon } from "./realmojiWithIcon";

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
  useErrorToast(isError, "Failed to set Realmoji");

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
            <HStack gap="$2">
              <For each={meQuery.data?.realmojis}>
                {(realmoji) => (
                  <RealmojiWithIcon
                    emoji={realmoji.emoji}
                    imageUrl={realmoji.media.url}
                    onClick={() => {
                      realmojiMutation.mutate({
                        postId,
                        emoji: realmoji.emoji,
                      });
                      setActiveRealmojiReactionModal(false);
                    }}
                  />
                )}
              </For>
            </HStack>
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
