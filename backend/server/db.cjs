require("dontenv").config({ path: `${process.cwd()} /.env` });
const { Connection } = require("pg");

const connection = new Connection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

module.exports = connection;
