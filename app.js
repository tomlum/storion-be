require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")

const stories = require("./routes/stories")

const app = express()

app.use(helmet())
app.use(cors());
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("combined"))

// Routes
app.use("/stories", stories)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log("App listening on port ", port)	
})
