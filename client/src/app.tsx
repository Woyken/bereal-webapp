import { ThemeProvider } from "@suid/material";
import Button from "@suid/material/Button";
import CssBaseline from "@suid/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { ErrorBoundary } from "solid-js";
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
          <CssBaseline />
          <UserTokenProvider>
            <ErrorBoundary
              fallback={(err, reset) => (
                <>
                  Website crashed, {JSON.stringify(err)}
                  <Button onclick={reset}>Reset</Button>
                </>
              )}
            >
              <MainView />
            </ErrorBoundary>
          </UserTokenProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BerealWrapperClientProvider>
  );
};
export default App;
