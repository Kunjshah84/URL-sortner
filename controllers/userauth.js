
import users from '../models/userauth.js'

async function handleusersignup(req,res){
    const {name , email , password} = req.body;
    //Now here we can do the validations:
    await users.create({
        name: name,
        email:email,
        password:password
    })
    return res.status(200).render('home')
}

export {handleusersignup}