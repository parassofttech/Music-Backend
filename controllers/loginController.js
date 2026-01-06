const loginModel = require("../model/loginModel")
const registerModel = require("../model/registerModel")

   let loginInserted = (req,res)=>{
    let { email,password}=req.body
    let loginObj =new loginModel({
            
            email,
            password
        }
    )
    loginObj.save().then(()=>{
        res.send({status:1, message:"data Insertedgccgh"})
    }).catch((err)=>{
        res.send({status:0, message:"data Inserted",error:err})
    })
   }

   let loginRead =(req,res)=>{
       res.send("data is resesr")
   }
   
   let registerInserted = (req,res)=>{
    let { name,email,password}=req.body
    let loginObj =new registerModel({
            name,
            email,
            password
        }
    )
    loginObj.save().then(()=>{
        res.send({status:1, message:"data Insertedgccgh"})
    }).catch((err)=>{
        res.send({status:0, message:"data Inserted",error:err})
    })
   }

   module.exports={loginInserted,registerInserted, loginRead}