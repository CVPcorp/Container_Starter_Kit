const promise = require("bluebird");
const pgPromise = require("pg-promise");

const config = require("../config");

const pgp = pgPromise({
    promiseLib: promise,
  });

const db = pgp({
  host: config.PG_HOST,
  port: config.PG_PORT,
  database: config.PG_DATABASE,
  user: config.PG_USER,
  password: config.PG_PASSWORD,
});

module.exports = db;