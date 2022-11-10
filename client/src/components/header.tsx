import { Box, Text } from "@hope-ui/solid";
import { PropsWithClass } from "../utils/propsWithClass";

const Header = (props: PropsWithClass) => {
  return (
    <Box class={props.class} position="static">
      <Text as="h5" flexGrow={1} textAlign="center">
        BeReal - Web
      </Text>
    </Box>
  );
};

export default Header;
