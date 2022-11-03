import envConfig from "../envConfig";
import { Api } from "../openApiClients/generated/beRealApi";

export function createBeRealClient() {
  return new Api({
    baseURL: envConfig.berealUrl,
    headers: {
      "user-agent": "AlexisBarreyat.BeReal/0.23.2 iPhone/16.0 hw/iPhone13_2",
    },
  });
}
