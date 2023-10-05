const express = require("express")
const app = express()
const handlebarsConfig = require("./config/handlebarasConfig.js")
const expressConfig = require("./config/expressConfig.js")
const {PORT} = require("./constants.js")
const routes = require("./router.js")

handlebarsConfig(app)
expressConfig(app)

app.use(routes)


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
