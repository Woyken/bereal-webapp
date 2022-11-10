import { Box, Heading } from "@hope-ui/solid";
import { PropsWithClass } from "../utils/propsWithClass";

const Header = (props: PropsWithClass) => {
  return (
    <Box class={props.class} position="sticky">
      <Heading size="3xl" flexGrow={1} textAlign="center">
        BeReal - Web
      </Heading>
    </Box>
  );
};

export default Header;
