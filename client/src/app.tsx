import { HopeProvider } from "@hope-ui/core";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import MainView from "./components/mainView";
import { UserTokenProvider } from "./components/userTokenProvider";
import { BerealWrapperClientProvider } from "./openApiClients/berealWrapperClient";

const App = () => {
  const client = new QueryClient();
  return (
    <BerealWrapperClientProvider>
      <QueryClientProvider client={client}>
        <HopeProvider>
          <UserTokenProvider>
            <MainView />
          </UserTokenProvider>
        </HopeProvider>
      </QueryClientProvider>
    </BerealWrapperClientProvider>
  );
};
export default App;
