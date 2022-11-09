import Avatar from "@suid/material/Avatar";
import Button from "@suid/material/Button";
import Card from "@suid/material/Card";
import CardActions from "@suid/material/CardActions";
import CardContent from "@suid/material/CardContent";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import { Show } from "solid-js";
import {
  BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp,
  BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost,
} from "../openApiClients/generated/berealWrapper";
import BerealFeedImage from "./berealFeedImage";
import RealmojiSquished from "./realmojiSquished";

const isToday = (someDate: Date) => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

const getTimePostedText = (
  creationDate: BerealAppRepositoriesPostDatasourcesRemoteModelFirebaseTimestamp,
  lateInSeconds: number
) => {
  const postedDate = new Date(
    creationDate._seconds * 1000 + creationDate._nanoseconds / 1000 / 1000
  );

  if (lateInSeconds >= 60 * 60)
    return Math.floor(lateInSeconds / (60 * 60)) + "h late";
  if (lateInSeconds >= 60) return Math.floor(lateInSeconds / 60) + "min late";
  if (lateInSeconds) return lateInSeconds + "s late";
  const timeStr = postedDate.toLocaleTimeString();
  if (isToday(postedDate)) return "Today at " + timeStr;
  return "Yesterday at " + timeStr;
};

const FeedCard = ({
  item,
}: {
  item: BerealAppRepositoriesPostDatasourcesRemoteModelRemotePost;
}) => {
  const postedAt = getTimePostedText(
    item.creationDate ?? { _nanoseconds: 0, _seconds: 0 },
    item.lateInSeconds ?? 0
  );

  return (
    <Card sx={{ maxWidth: 505 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar src={item.user?.profilePicture?.url}>
            {item.user?.username?.replaceAll(".", "").substring(0, 5)}
          </Avatar>
          <Stack spacing={-1}>
            <Typography color="text.primary" gutterBottom>
              {item.user?.username}
            </Typography>
            <Show when={item.location}>
              <Typography color="text.secondary">
                {item.location?._latitude} {item.location?._longitude}
              </Typography>
            </Show>
          </Stack>
          <Stack
            // override stack styles and push it to end
            style={{ "margin-left": "auto" }}
            direction="row"
            alignSelf="center"
          >
            <Show when={postedAt}>
              <Typography fontSize="0.7em" color="text.secondary">
                {postedAt}
              </Typography>
            </Show>
          </Stack>
        </Stack>
        <BerealFeedImage
          primaryUrl={item.photoURL!}
          secondaryUrl={item.secondaryPhotoURL!}
        />
        <RealmojiSquished realmojis={item.realMojis} />
        <Show when={item.caption}>
          <Typography color="text.secondary">{item.caption}</Typography>
        </Show>
      </CardContent>
      <CardActions>
        <Show when={item.comment?.length}>
          <Button size="small">Comments {item.comment?.length}</Button>
        </Show>
      </CardActions>
    </Card>
  );
};

export default FeedCard;
