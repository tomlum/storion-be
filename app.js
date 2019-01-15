require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const helmet = require("helmet")
const cors = require("cors")
const compression = require("compression")
const morgan = require("morgan")

const stories = require("./routes/stories")
const desk = require("./routes/desk")

const whitelist = [
	"https://storion.org",
	"http://storion-staging.s3-website-us-east-1.amazonaws.com"
]

if(process.env.NODE_ENV === "development"){
	whitelist.push("http://localhost:3000")
}

const corsOptions = {
	origin: function(origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error("Not allowed by CORS"))
		}
	}
}

const app = express()
app.use(helmet())
app.use(cors(corsOptions))
app.use(compression())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("combined"))
// Routes
app.use("/stories", stories)
app.use("/desk", desk)
app.use(function(error, req, res, next) {
	res.status(500).send(error.message)
})
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log("App listening on port ", port)
})
