import Stack from "@suid/material/Stack";
import AppProviders from "./appProviders";
import Header from "./components/header";
import MainView from "./components/mainView";
import styles from "./app.module.css";

const App = () => {
  return (
    <AppProviders>
      <div class={styles.container}>
        <Header class={styles.header} />
        <MainView class={styles.main} />
      </div>
    </AppProviders>
  );
};

export default App;
