
require("dotenv");
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME1,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
