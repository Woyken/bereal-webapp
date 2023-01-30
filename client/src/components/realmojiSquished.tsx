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

  const [activeRealmoji, setActiveRealmoji] = createSignal(realmojis?.[0]);

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
      <Modal opened={isModalOpen()} onClose={() => setIsModalOpen((p) => !p)}>
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
              <For each={realmojis}>
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
            <Button onClick={() => setIsModalOpen((p) => !p)}>Close</Button>
          </ModalFooter>
        </ModalContent>
        <div>test</div>
      </Modal>
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
