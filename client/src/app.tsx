import AppProviders from "./appProviders";
import Header from "./components/header";
import FeedPage from "./components/feedPage";
import { Navigate, Route, Routes } from "@solidjs/router";
import LoginPage from "./components/login/loginPage";
import VerifyCodePage from "./components/login/verifyCodePage";
import { Box } from "@hope-ui/solid";
import RealmojiUploadPage from "./components/realmojiUploadPage";

const RootPage = () => {
  return <Navigate href="/feed" />;
};

const Main = () => {
  return (
    <Box gridArea="main" overflow="auto" justifySelf="stretch">
      <Routes>
        <Route path="/" component={RootPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/verifyCode/:sessionInfo" component={VerifyCodePage} />
        <Route path="/feed" component={FeedPage} />
        <Route path="/realmoji" component={RealmojiUploadPage} />
      </Routes>
    </Box>
  );
};

const App = () => {
  return (
    <AppProviders>
      <Box
        height="100vh"
        display="grid"
        gridTemplateColumns="auto"
        gridTemplateRows="auto 1fr"
        gridTemplateAreas={`"header" "main"`}
      >
        <Header />
        <Main />
      </Box>
    </AppProviders>
  );
};

export default App;
