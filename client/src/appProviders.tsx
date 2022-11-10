import { Button, HopeProvider } from "@hope-ui/solid";
import { hashIntegration, Router } from "@solidjs/router";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/solid-query";
import { ErrorBoundary, ParentProps } from "solid-js";
import { UserTokenProvider } from "./components/userTokenProvider";
import { BerealWrapperClientProvider } from "./openApiClients/berealWrapperClient";
import { useAppTheme } from "./theme";
// import { useAppTheme } from "./theme";
import { persistWithIndexedDB } from "./utils/offlineQueryCache";

const AppProviders = (props: ParentProps) => {
  const hopeConfig = useAppTheme();
  const queryCache = new QueryCache();
  const client = new QueryClient({
    queryCache,
    defaultOptions: {
      queries: { staleTime: 1000 * 20, cacheTime: 1000 * 60 * 60 * 24 },
    },
  });
  persistWithIndexedDB(client);
  return (
    <>
      <BerealWrapperClientProvider>
        <QueryClientProvider client={client}>
          <HopeProvider config={hopeConfig} enableCssReset>
            {/* <CssBaseline /> */}
            <UserTokenProvider>
              <ErrorBoundary
                fallback={(err, reset) => (
                  <>
                    Website crashed, {JSON.stringify(err)}
                    <Button onclick={reset}>Reset</Button>
                  </>
                )}
              >
                <Router source={hashIntegration()}>{props.children}</Router>
              </ErrorBoundary>
            </UserTokenProvider>
          </HopeProvider>
        </QueryClientProvider>
      </BerealWrapperClientProvider>
    </>
  );
};

export default AppProviders;
