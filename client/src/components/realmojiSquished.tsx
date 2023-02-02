import {
  Avatar,
  AvatarExcess,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  Flex,
} from "@hope-ui/solid";
import { createSignal, For, Show } from "solid-js";
import { BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji } from "../openApiClients/generated/berealWrapper";
import { RealmojiWithIcon } from "./realmojiWithIcon";

type RealmojiReactionsModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => boolean;
  realmojis?: BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji[];
};

const RealmojiReactionsModal = (props: RealmojiReactionsModalProps) => {
  const [activeRealmoji, setActiveRealmoji] = createSignal(
    props.realmojis?.[0]
  );

  return (
    <Modal
      opened={props.isModalOpen}
      onClose={() => props.setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Reactions</ModalHeader>
        <ModalBody>
          <Flex direction="column">
            <Image src={activeRealmoji()?.uri} />
            <Text>
              {activeRealmoji()?.emoji} {activeRealmoji()?.userName}
            </Text>
          </Flex>
          <Flex>
            <For each={props.realmojis}>
              {(realmoji) => (
                <>
                  <Flex
                    direction="column"
                    gap={8}
                    onClick={() => setActiveRealmoji(realmoji)}
                  >
                    <RealmojiWithIcon
                      emoji={realmoji.emoji}
                      imageUrl={realmoji.uri}
                    />
                  </Flex>
                </>
              )}
            </For>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => props.setIsModalOpen(false)}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const RealmojiSquished = ({
  realmojis,
}: {
  realmojis?: BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji[];
}) => {
  const limitedRealmojis = realmojis?.slice(0, 3);
  const allLength = realmojis?.length ?? 0;
  const limitedLength = limitedRealmojis?.length ?? 0;
  const extraText =
    allLength > limitedLength ? `+${allLength - limitedLength}` : undefined;

  const [isModalOpen, setIsModalOpen] = createSignal(false);
  return (
    <Box
      position="absolute"
      bottom="$2"
      left="$5"
      display="flex"
      flexDirection="row-reverse"
      justifyContent="start"
      onClick={() => setIsModalOpen((p) => !p)}
    >
      <RealmojiReactionsModal
        isModalOpen={isModalOpen()}
        setIsModalOpen={setIsModalOpen}
        realmojis={realmojis}
      />
      <Show when={extraText}>
        <AvatarExcess marginLeft="-$2" withBorder>
          {extraText}
        </AvatarExcess>
      </Show>
      <For each={limitedRealmojis}>
        {(realmoji) => (
          <Avatar
            marginLeft="-$2"
            withBorder
            src={realmoji.uri}
            name={realmoji.emoji}
          />
        )}
      </For>
    </Box>
  );
};

export default RealmojiSquished;
