const express = require("express")
const { checkJwt } = require("./auth")
const connection = require("../config/knexfile")
const knex = require("knex")(connection)

const router = express.Router()

router.get("/:storyID", checkJwt, async (req, res) => {
	knex("articles")
		.where("storyID", req.params.storyID)
		.select()
		.then(articles => {
			res.status(200).json(articles)
		})
		.catch(error => {
			res.status(500).json({ error })
		})
})

router.get("/", async (req, res) => {
	knex("stories")
		.select()
		.then(stories => {
			res.status(200).json(stories)
		})
		.catch(error => {
			res.status(500).json({ error })
		})
})

module.exports = router
