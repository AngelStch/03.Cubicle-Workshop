const express = require("express")
const app = express()
const handlebarsConfig = require("./config/handlebarasConfig.js")
const expressConfig = require("./config/expressConfig.js")
const routes = require("./router.js")
const dbConnect = require("./config/dbConfig.js")


const {PORT} = require("./constants.js")
handlebarsConfig(app)
expressConfig(app)

dbConnect()
.then(() => console.log("Successfully connection to DB"))
.catch((err) => console.log(`Error while connecting in databse: ${err}`))
app.use(routes)


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
