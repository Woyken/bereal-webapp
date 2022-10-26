import Stack from "@suid/material/Stack";
import AppProviders from "./appProviders";
import Header from "./components/header";
import FeedPage from "./components/feedPage";
import styles from "./app.module.css";
import { PropsWithClass } from "./utils/propsWithClass";
import { Navigate, Route, Routes } from "@solidjs/router";
import LoginPage from "./components/login/loginPage";
import VerifyCodePage from "./components/login/verifyCodePage";

const RootPage = () => {
  return <Navigate href="/feed" />;
};

const Main = (props: PropsWithClass) => {
  return (
    <div class={props.class}>
      <Routes>
        <Route path="/" component={RootPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/verifyCode/:sessionInfo" component={VerifyCodePage} />
        <Route path="/feed" component={FeedPage} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <AppProviders>
      <div class={styles.container}>
        <Header class={styles.header} />
        <Main class={styles.main} />
      </div>
    </AppProviders>
  );
};

export default App;
