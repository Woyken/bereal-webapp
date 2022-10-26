import { ThemeProvider } from "@suid/material";
import Button from "@suid/material/Button";
import CssBaseline from "@suid/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { ErrorBoundary, ParentProps } from "solid-js";
import { UserTokenProvider } from "./components/userTokenProvider";
import { BerealWrapperClientProvider } from "./openApiClients/berealWrapperClient";
import { useAppTheme } from "./theme";

const AppProviders = (props: ParentProps) => {
  const theme = useAppTheme();
  const client = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 20 } },
  });
  return (
    <>
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
                {props.children}
              </ErrorBoundary>
            </UserTokenProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </BerealWrapperClientProvider>
    </>
  );
};

export default AppProviders;