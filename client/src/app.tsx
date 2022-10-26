import Stack from "@suid/material/Stack";
import AppProviders from "./appProviders";
import Header from "./components/header";
import MainView from "./components/mainView";
import styles from "./app.module.css";

const App = () => {
  return (
    <AppProviders>
      <div class={styles.container}>
        <div class={styles.header}>
          <Header />
        </div>
        <div class={styles.main}>
          <MainView />
        </div>
      </div>
    </AppProviders>
  );
};

export default App;
