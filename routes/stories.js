const express = require("express")
const connection = require("../knexfile")
const knex = require("knex")(connection)

const router = express.Router()


router.get("/:storyID", async (req, res) => {
	knex("articles")
		.where("storyID", req.params.storyID)
		.select()
		.then(stories => {
			res.status(200).json(stories)
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
