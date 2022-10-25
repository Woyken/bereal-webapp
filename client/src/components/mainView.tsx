import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
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
        <Stack>
          <For each={friendsPosts.data}>
            {(item) => (
              <Card>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.user.username}
                  </Typography>
                  <img src={item.photoURL} style={{"max-height": '300px', margin: '5px'}}/>
                  <img src={item.secondaryPhotoURL} style={{"max-height": '300px', margin: '5px'}}/>
                </CardContent>
                <CardActions>
                  <Button size="small">TODO</Button>
                </CardActions>
              </Card>
            )}
          </For>
        </Stack>
      </Show>
    </>
  );
};

export default MainView;
