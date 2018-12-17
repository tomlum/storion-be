const jwt = require("koa-jwt")
const { koaJwtSecret } = require("jwks-rsa")

module.exports.checkJwt = jwt({
	secret: koaJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
	}),
	audience: process.env.AUTH0_AUDIENCE,
	issuer: process.env.AUTH0_ISSUER,
	algorithms: ["RS256"]
})
