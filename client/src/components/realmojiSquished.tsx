import { Avatar, AvatarExcess, Box } from "@hope-ui/solid";
import { For, Show } from "solid-js";
import { BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji } from "../openApiClients/generated/berealWrapper";

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

  return (
    <Box
      position="absolute"
      bottom="$2"
      left="$5"
      display="flex"
      flexDirection="row-reverse"
      justifyContent="start"
    >
      <Show when={extraText}>
        <AvatarExcess marginLeft="-$2" withBorder>
          {extraText}
        </AvatarExcess>
      </Show>
      <For each={limitedRealmojis}>
        {(realmoji) => (
          <Avatar marginLeft="-$2" withBorder src={realmoji.uri} />
        )}
      </For>
    </Box>
  );
};

export default RealmojiSquished;
