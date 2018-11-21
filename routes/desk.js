const express = require("express")
const connection = require("../knexfile")
const { checkJwt } = require("./auth")
const knex = require("knex")(connection)

const router = express.Router()

router.get("/", checkJwt, async (req, res) => {
	if (req.user) {
		knex("articles")
			.where("owner", req.user.email)
			.select()
			.then(articles => {
				res.status(200).json(articles)
			})
			.catch(error => {
				res.status(500).json({ error })
			})
	} else {
		res.status(200).json({})
	}
})

module.exports = router
