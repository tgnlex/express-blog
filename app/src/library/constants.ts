import env, {NODE} from 'env';
import { resolve } from 'path';
import { address } from './literals';


const __views: string = "/src/views" as const;
const __static: string = '/static' as const;
const production: boolean = NODE === "production" as const;
const development: boolean = NODE === "development" as const;
const vars = {
  __views: __views, 
  __static: __static,
  production: production,
  development: development,
};

export {
  development,
  production, 
  __views,
  __static,
}
export default vars;
