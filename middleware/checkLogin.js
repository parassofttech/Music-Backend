
const loginController = require('../controllers/loginController')
const chekLogin = (req,res,next) => {
 const id = req.params
 const {email,password}= req.body
 if(!email || !password){
    alert("fill the correct email")
 }


 const user = loginController.find({_id:id})
 if(user.email!==email){
    alert("fill thee")
 }
 next()
}

module.exports ={chekLogin}
