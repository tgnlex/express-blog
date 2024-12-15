import dotenv from 'dotenv';
import type {EnvVars} from 'library/interface.ts';
dotenv.config();

const APP_HOST: string = process.env.APP_HOST || "localhost";
const APP_PORT: number = Number(process.env.APP_PORT) || 3000;
const API_HOST: string = process.env.API_HOST || APP_HOST;
const API_PORT: number = Number(process.env.API_PORT) || 5000;
const NODE: string = process.env.NODE_ENV || "development";
const LOGL: string = process.env.LOG_LEVEL || "debug";
const MAIL: string = process.env.EMAIL_ADDRESS || "awdevtestmail@gmail.com";


const env: EnvVars = {
  HOST: APP_HOST, 
  PORT: APP_PORT, 
  NODE: NODE, 
  LOGL: LOGL,
  MAIL: MAIL,
  API: { HOST: API_HOST, PORT: API_PORT }
} as const;

export default env;
export { APP_HOST, APP_PORT, API_HOST, API_PORT, NODE, LOGL, MAIL,  };