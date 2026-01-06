const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB =  async ()=>{
    const conn = await mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connect to mongoDB")
}).catch((err)=>{
    console.log(err)
})
}

module.exports= connectDB