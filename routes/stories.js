const express = require("express")
const { checkJwt } = require("./auth")
const connection = require("../knexfile")
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
			console.log(">>>>>> ", error)
			res.status(500).json({ error })
		})
})

router.get("/", async (req, res) => {
	// console.log(">>>>>>>> ", req.user.name)
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
