import env, {NODE} from 'env';
import { resolve } from 'path';
let API = env.API;
const __api: string = `http://${API.HOST}:${API.PORT}/api`;
const address: string = `http://${env.HOST}:${env.PORT}`;

const __views: string = resolve(__dirname, "../views/");
const __static: string = '/static';
const production: boolean = NODE === "production";
const development: boolean = NODE === "development";
const vars = {
  address: address,
  __api: __api, 
  __views: __views, 
  __static: __static,
  production: production,
  development: development,
};

export {
  development,
  production, 
  address,
  __views,
  __static,
  __api
}
export default vars;
