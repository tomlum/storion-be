require("dotenv").config()

const pg = require("pg")
pg.defaults.ssl = process.env.SSL

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL
};
