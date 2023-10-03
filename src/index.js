const express = require("express")
const app = express()
const handlebars = require("assert-handlebars")

const PORT = 5050
app.engine("hbs", handlebars.engine({extname: "hbs"}))
app.set("view engiine", "hbs")
app.set("views", "src/views")

app.get("/", (req,res)=>{
    res.send("helo")
})

app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))
