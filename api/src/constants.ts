import {resolve} from 'path';
import {NODE} from 'env';

const SIGT = "SIGTERM";

const DEVELOPMENT = NODE === "development";
const PRODUCTION = NODE === "production";

export {DEVELOPMENT, PRODUCTION}

export {SIGT};