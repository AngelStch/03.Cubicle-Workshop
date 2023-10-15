const router = require("express").Router();
const cubeService = require("../services/cubeService");
const  userService = require("../services/userService.js")

router.get("/register",  (req, res) => {
    res.render("user/register")
});

router.get("/login",  (req, res) => {
    res.render("user/login")
});

router.get("/loguot",  (req, res) => {
    res.render("user/logout")
});

router.post("/register", async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await userService.register({ username, password, repeatPassword });
  
    res.redirect("/users/login");
});


module.exports = router;