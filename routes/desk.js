const express = require("express")
const connection = require("../config/knexfile")
const { checkJwt } = require("./auth")
const { stringCompare, array, tag } = require("./utils")
const knex = require("knex")(connection)
const moment = require("moment")

const router = express.Router()

router.get("/test", async (req, res, next) => {
	try {
		res.status(200).json({nice: "success"})
	} catch (error) {
		next(error)
	}
})

router.get("/", async (req, res, next) => {
	try {
		if (!req.user) {
			const articles = await knex("articles")
				.where("owner", "test")
				.select()

			for (let i = 0; i < articles.length; i++) {
				if (articles[i].tags === ""){
					articles[i].tags = []
				} else {
					articles[i].tags = articles[i].tags.split("`")
				}
			}

			res.status(200).json(articles)
		} else {
			res.status(200).json({ error: "No user" })
		}
	} catch (error) {
		next(error)
	}
})

router.post("/", checkJwt, async (req, res, next) => {
	try {
		if (req.user) {
			const article = req.body

			// Cleaning and Validation
			for (let i = 0; i < article.tags.length; i++) {
				if (tag.invalid(article.tags[i])) {
					article.tags.splice(i, 1)
				}
			}
			article.tags.sort(stringCompare)
			article.tags = article.tags.join("`")
			const newArticle = {
				...article,
				owner: req.user.email,
				storyID: null
			}
			console.log(newArticle.time, moment(newArticle.time, "YYYY-MM-DD", true))
			if (newArticle.time && !moment(newArticle.time, "YYYY-MM-DD", true).isValid()) {
				throw new Error("Invalid date")
			}

			if (article.id) {
				await knex("articles").where({ id: article.id }).update(newArticle)
				res.status(200).json({})
			} else {
				await knex("articles").insert(newArticle)
				res.status(200).json({})
			}
		} else {
			res.status(200).json({ error: "No user" })
		}
	} catch (error) {
		next(error)
	}
})

module.exports = router
