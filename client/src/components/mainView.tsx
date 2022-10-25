import Avatar from "@suid/material/Avatar";
import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import CircularProgress from "@suid/material/CircularProgress";
import Container from "@suid/material/Container";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import { Show, For, Suspense } from "solid-js";
import { useFriendsPostsQuery } from "../openApiClients/berealWrapperQueries";
import { FeedsFriendsResponse } from "../openApiClients/generated/berealWrapper";

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
        <div>
          <img
            src={item.photoURL}
            style={{ "max-height": "300px", margin: "5px" }}
          />
          <img
            src={item.secondaryPhotoURL}
            style={{ "max-height": "300px", margin: "5px" }}
          />
          <Show when={item.caption}>
            <Typography color="text.secondary">{item.caption}</Typography>
          </Show>
        </div>
      </CardContent>
      <CardActions>
        <Show when={item.comment.length}>
          <Button size="small">Comments {item.comment.length}</Button>
        </Show>
      </CardActions>
    </Card>
  );
};

const MainView = () => {
  const friendsPosts = useFriendsPostsQuery();

  return (
    <>
      <Container>
        <Stack spacing={2}>
          <Suspense fallback={<CircularProgress />}>
            <For each={friendsPosts.data}>
              {(item) => <FeedCard item={item}></FeedCard>}
            </For>
          </Suspense>
        </Stack>
      </Container>
    </>
  );
};

export default MainView;
