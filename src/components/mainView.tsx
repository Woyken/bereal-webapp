import { createQuery } from "@tanstack/solid-query";
import { Show, For } from "solid-js";
import { throwInline } from "../utils/throwInline";
import { useUserToken } from "./userTokenProvider";

// Pretty good reverse engineered API can be found here https://github.com/notmarek/BeFake/blob/master/insomnia.json

type Posts = {
  userName: string;
};

const useQueryFriendsPosts = () => {
  const userToken = useUserToken();
  return createQuery(
    () => ["friends"],
    async () => {
      const token = userToken.token() ?? throwInline(new Error("no token"));

      const response = await fetch(
        "https://mobile.bereal.com/api/feeds/friends",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return (await response.json()) as Posts[];
    }
  );
};

const MainView = () => {
  const friendsPosts = useQueryFriendsPosts();

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
