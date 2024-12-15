import {NODE} from 'env';
import {resolve} from 'path';

const __db = resolve(__dirname, '../database');
const production = NODE === "production";

export { __db };
export { production };