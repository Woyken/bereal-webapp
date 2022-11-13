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
      backgroundColor="$neutral2"
    >
      <Heading size="3xl" flexGrow={1} textAlign="center">
        BeReal - Web
      </Heading>
      <GithubCorner />
    </Box>
  );
};

export default Header;
