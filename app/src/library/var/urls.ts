import { address } from "../literals";
import env from "@/config/env";

const api: string = address(env.API.HOST, env.API.PORT);

const url = {
  api: api,
};

export default url;