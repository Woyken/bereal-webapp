import { createContext, ParentProps, useContext } from "solid-js";
import envConfig from "../envConfig";
import { HttpClient } from "./generated/berealWrapper";

const ctx = createContext<HttpClient>();

export const BerealWrapperClientProvider = (props: ParentProps) => {
  const berealWrapperClient = new HttpClient({ baseUrl: envConfig.berealWrapperUrl });

  return (
    <ctx.Provider value={berealWrapperClient}>{props.children}</ctx.Provider>
  );
};

export const useBerealWrapperClient = () => {
  const client = useContext(ctx);
  if (!client) throw new Error("client not provided");
  return client;
};
