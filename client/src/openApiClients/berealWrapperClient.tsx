import { createContext, ParentProps, useContext } from "solid-js";
import envConfig from "../envConfig";
import { Api } from "./generated/berealWrapper";

const ctx = createContext<Api<unknown>>();

export const BerealWrapperClientProvider = (props: ParentProps) => {
  const berealWrapperClient = new Api({ baseUrl: envConfig.berealWrapperUrl });

  return (
    <ctx.Provider value={berealWrapperClient}>{props.children}</ctx.Provider>
  );
};

export const useBerealWrapperClient = () => {
  const client = useContext(ctx);
  if (!client) throw new Error("client not provided");
  return client;
};
