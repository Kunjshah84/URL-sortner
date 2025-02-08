
import users from '../models/userauth.js'
import { v4 as uuidv4 } from 'uuid';
import {setuser, getuser} from '../service/auth.js'


async function handleusersignup(req,res){
    const {name , email , password} = req.body;
    //Now here we can do the validations:
    const user = await users.create({
        name: name,
        email : email,
        password : password
    })
    return res.status(200).redirect('/')
}

async function handleuserslogin(req,res){
    const {email , password} = req.body;
    //Now here we can do the validations:
    // console.log(email , password);
    const user=await users.findOne({
        email : email ,
        password : password
    })
    // console.log(user)
    if(!user)    return res.render('login' , {
        error : 'Invalide mail or password'
    })
    const sessionid=uuidv4() 
    setuser(sessionid , user)
    res.cookie('uid' , sessionid)
    return res.status(200).redirect('/')
}

export {handleusersignup,handleuserslogin}