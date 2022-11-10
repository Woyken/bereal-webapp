import { Box, Flex } from "@hope-ui/solid";
import { ParentProps } from "solid-js";

const LoginPageLayout = (props: ParentProps) => {
  return (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="$lg" backgroundColor="$neutral2" borderRadius='$md'>
        {props.children}
      </Box>
    </Flex>
  );
};
export default LoginPageLayout;
