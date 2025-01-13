import {resolve} from 'path';
import {NODE} from 'env';

const SIGT = "SIGTERM";
const SIGTERM_LOG = `${SIGT} signal received... Preparing for shutdown!`;

const DEVELOPMENT = NODE === "development";
const PRODUCTION = NODE === "production";

export {DEVELOPMENT, PRODUCTION}

export {SIGT, SIGTERM_LOG};