<<<<<<< HEAD
require("dotenv");
=======
// Validation
require("dotenv").config();

>>>>>>> 961256a6baf525e53d6396b8717c6c1ce2b1dbcc
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_TEST,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_GRAY_URL",
    dialect: "mysql"
  }
};
