const express = require("express")
const { loginInserted, loginRead, registerInserted } = require("../controllers/loginController")
const { chekLogin } = require("../middleware/checkLogin")
// const { chekLogin } = require("../middleware/chekLogin")

let loginRouter = express.Router()

loginRouter.post("/login", loginInserted)
loginRouter.post("/register", registerInserted)
loginRouter.get("/read",chekLogin, loginRead)


module.exports = loginRouter