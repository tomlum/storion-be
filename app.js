require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const stories = require("./routes/stories")
const desk = require("./routes/desk")

const app = express()
app.use(helmet())
app.use(cors());
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("combined"))
// Routes
app.use("/stories", stories)
app.use("/desk", desk)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log("App listening on port ", port)	
})
