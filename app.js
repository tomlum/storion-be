require("dotenv").config()
const koa = require("koa")
const combineRouters = require('koa-combine-routers')
const bodyParser = require("koa-bodyparser")
const cors = require("koa-cors")
const helmet = require("koa-helmet")
const morgan = require("koa-morgan")

// const stories = require("./routes/stories")
const desk = require("./routes/desk")

const app = new koa()
app.use(async function handleError(context, next) {
  try {
    await next();
  } catch (error) {
    context.status = 500;
    context.body = error;
  }
});
app.use(helmet())
app.use(cors());
app.use(bodyParser())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("combined"))
// Routes
const router = combineRouters(
  desk
)

app.use(router())

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log("App listening on port ", port)	
})
