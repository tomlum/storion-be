require("dotenv").config({ path: "../.env" })

const pg = require("pg")
pg.defaults.ssl = process.env.SSL

if (process.env.IS_OFFLINE === "true") {
	module.exports = {
		client: "pg",
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: "./migrations"
		},
		seeds: {
			directory: "./seeds"
		}
	}
} else {
	
}
