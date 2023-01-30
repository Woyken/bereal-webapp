import { Avatar, Box, Text } from "@hope-ui/solid";

interface Props {
  imageUrl?: string;
  emoji?: string;
  onClick?: () => void;
}

export const RealmojiWithIcon = (props: Props) => {
  return (
    <Box position="relative" onClick={props.onClick}>
      <Avatar src={props.imageUrl} name={props.emoji} />
      <Text position="absolute" bottom="0" right="0">
        {props.emoji}
      </Text>
    </Box>
  );
};
