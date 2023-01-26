import { Box, Heading } from "@hope-ui/solid";
import { A } from "@solidjs/router";
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
      <A href="https://github.com/Woyken/bereal-webapp">
        <GithubCorner />
      </A>
    </Box>
  );
};

export default Header;
