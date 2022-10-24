import { createQuery } from "@tanstack/solid-query";
import { Show, For } from "solid-js";
import { useFriendsPostsQuery } from "../openApiClients/berealWrapperQueries";

// Pretty good reverse engineered API can be found here https://github.com/notmarek/BeFake/blob/master/insomnia.json

type Posts = {
  userName: string;
};

const MainView = () => {
  const friendsPosts = useFriendsPostsQuery();

  return (
    <>
      <Show when={friendsPosts.isSuccess}>
        <For each={friendsPosts.data}>
          {(item) => <div>{item.userName}</div>}
        </For>
      </Show>
    </>
  );
};

export default MainView;
