import "dotenv";
export const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: "127.0.0.1",
  dialect: "mysql"
};
export const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME1,
  host: "127.0.0.1",
  dialect: "mysql"
};
export const production = {
  // eslint-disable-next-line camelcase
  use_env_variable: "JAWSDB_URL",
  dialect: "mysql"
};
