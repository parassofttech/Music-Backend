const contactModel = require("../model/contactModel")



   let contactInserted = (req,res)=>{
    let { name,email,message}=req.body
    let contactObj =new contactModel ({
            name,
            email,
            message
        }
    )
    contactObj.save().then(()=>{
        res.send({status:1, message:"data Insertedgccgh"})
    }).catch((err)=>{
        res.send({status:0, message:"data Inserted",error:err})
    })
   }

   module.exports = {contactInserted}

   