import Avatar from "@suid/material/Avatar";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import CircularProgress from "@suid/material/CircularProgress";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import { Show, For, Suspense } from "solid-js";
import { useFriendsPostsQuery } from "../openApiClients/berealWrapperQueries";
import { FeedsFriendsResponse } from "../openApiClients/generated/berealWrapper";
import { PropsWithClass } from "../utils/propsWithClass";
import BerealFeedImage from "./berealPostImage";

// Pretty good reverse engineered API can be found here https://github.com/notmarek/BeFake/blob/master/insomnia.json

const FeedCard = ({ item }: { item: FeedsFriendsResponse }) => {
  return (
    <Card sx={{ maxWidth: 505 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar src={item.user.profilePicture?.url}>
            {item.user.username.replaceAll(".", "").substring(0, 5)}
          </Avatar>
          <Stack spacing={-1}>
            <Typography color="text.primary" gutterBottom>
              {item.user.username}
            </Typography>
            <Show when={item.location}>
              <Typography color="text.secondary">
                {item.location?._latitude} {item.location?._longitude}
              </Typography>
            </Show>
          </Stack>
        </Stack>
        <BerealFeedImage
          primaryUrl={item.photoURL}
          secondaryUrl={item.secondaryPhotoURL}
        />
        <Show when={item.caption}>
          <Typography color="text.secondary">{item.caption}</Typography>
        </Show>
      </CardContent>
      <CardActions>
        <Show when={item.comment.length}>
          <Button size="small">Comments {item.comment.length}</Button>
        </Show>
      </CardActions>
    </Card>
  );
};

const MainView = (props: PropsWithClass) => {
  const friendsPosts = useFriendsPostsQuery();

  return (
    <Box class={props.class}>
      <Stack spacing={2} alignItems="center" overflow="scroll">
        <Suspense fallback={<CircularProgress />}>
          <For each={friendsPosts.data}>
            {(item) => <FeedCard item={item}></FeedCard>}
          </For>
        </Suspense>
      </Stack>
    </Box>
  );
};

export default MainView;
