import AppProviders from "./appProviders";
import MainView from "./components/mainView";

const App = () => {
  return (
    <AppProviders>
      <MainView />
    </AppProviders>
  );
};
export default App;
