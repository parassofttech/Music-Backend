const express = require("express")
const { loginInserted, loginRead, registerInserted, dataList } = require("../controllers/loginController")



let loginRouter = express.Router()

loginRouter.post("/login", loginInserted)
loginRouter.post("/register", registerInserted)
loginRouter.get("/read", loginRead)
loginRouter.get("/data",dataList)


module.exports = loginRouter