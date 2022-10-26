import Stack from "@suid/material/Stack";
import AppProviders from "./appProviders";
import Header from "./components/header";
import FeedPage from "./components/feedPage";
import styles from "./app.module.css";

const App = () => {
  return (
    <AppProviders>
      <div class={styles.container}>
        <Header class={styles.header} />
        <FeedPage class={styles.main} />
      </div>
    </AppProviders>
  );
};

export default App;
