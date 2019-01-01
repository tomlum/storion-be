require("dotenv").config()
const serverless = require("serverless-http")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const stories = require("./routes/stories")
const desk = require("./routes/desk")

const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
// When not returning nested objects
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("combined"))
// Routes
app.use("/stories", stories)
app.use("/desk", desk)
app.use(function(error, req, res, next) {
	res.status(500).send(error.message)
})

module.exports.handler = serverless(app)
