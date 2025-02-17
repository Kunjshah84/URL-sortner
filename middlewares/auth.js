
import { getuser } from '../service/auth.js'

//before This has one problem if we restart the server then the map is going to slush out
// but the cookie is going to store as it is but the proble is that we are not going to get the uer with the same userif
//kemke map to khali thai gayo che
//And after that we have to amintain the thig that if i have on my home then i can only show the url which is gererated by me 

async function redirecttologgieduseronly(req, res, next) {
    console.log("in the fist middle ware!");
    const useruid = req.headers["authorization"];
    // const useruid = req.cookies?.uid; 
    if (!useruid) return res.redirect('/user/login')
    const token = useruid.split('Bearer ')[1]
    const user = await getuser(token)
    // const user= await getuser(useruid)
    if (!user) return res.redirect('/user/login')
    req.user = user
    next()
}

//We are going to make the closure:
async function checkauth(req, res, next) {
    console.log("Form the checkauth middle ware!");
    const useruid = req.headers["authorization"];
    const token = useruid.split('Bearer ')[1]
    // const useruid = req.cookies?.uid; 
    // const user= await getuser(useruid)
    const user = await getuser(token)
    req.user = user
    console.log(user);
    next()
}

export { redirecttologgieduseronly, checkauth }