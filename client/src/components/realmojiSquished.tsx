import Avatar from "@suid/material/Avatar";
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
    allLength > limitedLength ? `${allLength - limitedLength}+` : undefined;

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row-reverse",
        "justify-content": "start",
      }}
      class="wrapper for realmojis"
    >
      <Show when={extraText}>
        <Avatar
          style={{
            "margin-left": "-5px",
          }}
        >
          {extraText}
        </Avatar>
      </Show>
      <For each={limitedRealmojis}>
        {(realmoji) => (
          <Avatar
            style={{
              "margin-left": "-5px",
            }}
            src={realmoji.uri}
          />
        )}
      </For>
    </div>
  );
};

export default RealmojiSquished;
