import { Avatar, Box, Text } from "@hope-ui/solid";

interface Props {
  imageUrl?: string;
  emoji?: string;
}

export const RealmojiWithIcon = (props: Props) => {
  return (
    <Box position="relative">
      <Avatar src={props.imageUrl} name={props.emoji} />
      <Text position="absolute" bottom="0" right="0">
        {props.emoji}
      </Text>
    </Box>
  );
};
