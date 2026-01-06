const express = require("express")
const loginRouter  = require("./routers/loginRouter")
require("dotenv").config()
const   mongoose  = require("mongoose")
const cors = require("cors")

const contactRouter = require("./routers/contactRouter")
// const connectDB = require("./db")

// const chekLogin = require("./middleware/chekLogin")


let app = express()
app.use(express.json())


app.use(cors())
// connectDB()

let isConnected = false;
async function connectMongoDB() {
    try {
        await mongoose.cnnnect(process.env.DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected= true;
        console.log('connect to MongoDB')
    } catch(error){
        console.error('Error connecting to MongoDB', error);
    }
}

app.use((req,res, next)=>{
    if(!isConnected){
        connectMongoDB()
    }
    next()
})


app.use("/music/api",contactRouter)
app.use("/music/api",loginRouter)

// app.listen(process.env.PORT,()=>{
//     console.log("server is connected")
// })


module.exports = app