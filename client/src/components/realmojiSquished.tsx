import Avatar from "@suid/material/Avatar";
import { For, Show } from "solid-js";
import { BerealAppRepositoriesPostDatasourcesRemoteModelRemoteRealMoji } from "../openApiClients/generated/berealWrapper";
import css from "./realmojiSquished.module.css";

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
    <div class={css.realmojiSquishedFlow}>
      <Show when={extraText}>
        <Avatar class={css.avatar}>{extraText}</Avatar>
      </Show>
      <For each={limitedRealmojis}>
        {(realmoji) => <Avatar class={css.avatar} src={realmoji.uri} />}
      </For>
    </div>
  );
};

export default RealmojiSquished;
