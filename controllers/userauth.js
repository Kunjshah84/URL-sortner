
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
    // const sessionid=uuidv4() 
    const token = setuser(user)
    //Here we are able to set the domain where we have to set the cookies:
    // res.cookie('uid' , token , {
    //     domain:"https://www.google.com/"
    //     and her we are able to make the subdomain spcific cookie which is going to send this cookie at any of the page which is 
    //     specified here;
    // })
    //And we can even set the expire date of the cookie:
    res.cookie('uid' , token)
    // return res.json({token})
    //And now we have two ways to send the tocken:
    // 1->>is to send through the cookie and it is going to set for every res and req
    // 2->>we have to manually set the token in the header of the res
    return res.status(200).redirect('/')

    //And the problem with cookie is that we can not use in rest api:
    //And in order to send the tocken and make them work in the mobile we can do this by sending the responce to the json
}

export {handleusersignup,handleuserslogin}