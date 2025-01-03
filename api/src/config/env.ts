import dotenv from 'dotenv';
dotenv.config();

interface EnvVars  {
  HOST: string;
  PORT: number; 
  LOGL: string;
  MAIL: string;
  NODE: string;
};

const HOST: string = process.env.API_HOST || "localhost";
const PORT: number = Number(process.env.API_PORT) || 5000;
const NODE: string = process.env.NODE_ENV || "development";
const LOGL: string = process.env.LOG_LEVEL || "debug";
const MAIL: string = process.env.EMAIL_ADDRESS || "awdevtestmail@gmail.com";


const env: EnvVars = {
  HOST: HOST, 
  PORT: PORT,
  NODE: NODE, 
  LOGL: LOGL,
  MAIL: MAIL
};

export default env;
export { HOST, PORT, NODE, LOGL }