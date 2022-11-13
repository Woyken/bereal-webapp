import { Box, Heading } from "@hope-ui/solid";
import GithubCorner from "./githubCorner";

const Header = () => {
  return (
    <Box
      position="sticky"
      display="flex"
      alignItems="center"
      gridArea="header"
      alignSelf="start"
    >
      <Heading size="3xl" flexGrow={1} textAlign="center">
        BeReal - Web
      </Heading>
    </Box>
  );
};

export default Header;
