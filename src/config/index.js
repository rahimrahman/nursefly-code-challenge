import ENV from "../../env";
import prodConfig from "./config.prod";
import devConfig from "./config.dev";

let config;

switch (ENV) {
  case "dev":
    config = devConfig;
    break;
  case "prod":
    config = prodConfig;
    break;
}

export default config;
