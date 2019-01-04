require("dotenv").config({path: '../.env'})

const pg = require("pg")
pg.defaults.ssl = process.env.SSL

console.log(process.env.NODE_ENV)

module.exports = {
	development: {
	  client: "pg",
	  connection: process.env.DEV_DATABASE_URL,
	  migrations: {
	    directory: './migrations'
	  },
	  seeds: {
	    directory: './seeds'
	  }
	},
	staging: {
	  client: "pg",
	  connection: process.env.DATABASE_URL,
	  migrations: {
	    directory: './migrations'
	  },
	  seeds: {
	    directory: './seeds'
	  }
	},
	production: {
	  client: "pg",
	  connection: process.env.DATABASE_URL,
	  migrations: {
	    directory: './migrations'
	  },
	  seeds: {
	    directory: './seeds'
	  }
	}
};
