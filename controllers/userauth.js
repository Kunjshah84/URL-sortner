
import users from '../models/userauth.js'

async function handleusersignup(req,res){
    const {name , email , password} = req.body;
    //Now here we can do the validations:
    await users.create({
        name: name,
        email:email,
        password:password
    })
    return res.status(200).render('/')
}

async function handleuserslogin(req,res){
    const {email , password} = req.body;
    //Now here we can do the validations:
    const user=await users.find({
        email , password
    })
    if(user)    return res.render('login' , {
        error : 'Invalide mail or password'
    })
    return res.redirect('/')
}

export {handleusersignup,handleuserslogin}