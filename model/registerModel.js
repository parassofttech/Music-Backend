const mongoose = require("mongoose")

let registerSchema = mongoose.Schema(
    {   
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }
    }
)

let registerModel = mongoose.model("register",registerSchema)

module.exports = registerModel