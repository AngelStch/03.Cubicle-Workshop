const router= require("express").Router();

const homeControler = require("./controllers/homeControler.js")
const cubeControler = require("./controllers/cubeControler.js")
const accessoryController =  require("./controllers/accessoryController.js")
const userControler =  require("./controllers/userController.js")


router.use(homeControler)
router.use("/cubes",cubeControler)
router.use("/accessories", accessoryController)
router.use("/users", userControler)

router.get("*",(req,res) =>{
    res.redirect('/404')
})
module.exports  = router