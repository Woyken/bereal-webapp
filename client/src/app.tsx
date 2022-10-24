import { HopeProvider } from "@hope-ui/core";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import MainView from "./components/mainView";
import { UserTokenProvider } from "./components/userTokenProvider";

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <HopeProvider>
        <UserTokenProvider>
          <MainView />
        </UserTokenProvider>
      </HopeProvider>
    </QueryClientProvider>
  );
};
export default App;
