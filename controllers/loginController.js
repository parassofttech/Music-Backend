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

   let loginRead = async (req,res)=>{
       let data  = await loginModel.find()
       res.send({status:1,message:"data reead", data:data})
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


   let dataList = async (req,res)=>{
    let data = await loginModel.find()
    res.send({status:1,message:"data readed",dataLists: data})
   }
   module.exports={loginInserted,registerInserted, loginRead,dataList}