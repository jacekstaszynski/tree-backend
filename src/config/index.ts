import { config } from "dotenv";

config({ path: `.env` });
export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const {
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_DATABASE,
    LOG_DIR,
    ORIGIN,
    LOG_FORMAT,

} = process.env;
