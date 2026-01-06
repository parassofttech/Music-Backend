const express = require("express")
const { contactInserted } = require("../controllers/contactController")



let contactRouter = express.Router()

contactRouter.post("/contact" ,contactInserted)



module.exports = contactRouter