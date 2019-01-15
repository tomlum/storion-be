const express = require("express")
const { checkJwt } = require("./auth")
const connection = require("../knex/knexfile")
const knex = require("knex")(connection[process.env.NODE_ENV_FILE || 'development'])

const router = express.Router()

router.get("/:storyID", checkJwt, async (req, res) => {
	knex("articles")
		.where("storyID", req.params.storyID)
		.select()
		.then(articles => {
			res.status(200).json(articles)
		})
		.catch(error => {
			console.log(">>>>>> ", error)
			res.status(500).json({ error })
		})
})

router.get("/", checkJwt, async (req, res) => {
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
