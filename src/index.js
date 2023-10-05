const express = require("express")
const app = express()
const handlebarsConfig = require("./config/handlebarasConfig.js")
const expressConfig = require("./config/expressConfig.js")
const {PORT} = require("./constants.js")

handlebarsConfig(app)
expressConfig(app)


app.get("/", (req,res)=>{
    res.render("index")
})

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
