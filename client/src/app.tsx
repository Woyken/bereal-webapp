import { ThemeProvider } from "@suid/material";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import MainView from "./components/mainView";
import { UserTokenProvider } from "./components/userTokenProvider";
import { BerealWrapperClientProvider } from "./openApiClients/berealWrapperClient";
import { useAppTheme } from "./theme";

const App = () => {
  const theme = useAppTheme();
  const client = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 20 } },
  });
  return (
    <BerealWrapperClientProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme()}>
          <UserTokenProvider>
            <MainView />
          </UserTokenProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BerealWrapperClientProvider>
  );
};
export default App;
