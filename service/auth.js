import jwt from 'jsonwebtoken'
const secret = "kunjshah298" ; 
//And do not share this scerate key with any one because if the haker has found this key then they can be able to make 
//Any uuse login:
//And don't share the token with any where because any one can able to copy the token and make the access the website of youres:
//And the banking website is going to use the sessions:

function setuser(user){
    return jwt.sign( {
        _id : user._id,
        email : user.email,
        role : user.roles
    }, secret)//Here we have to make the serate key which is going to tell that this is the customer which is ours
}

function getuser(token){
    if(!token) return null;    
    try{
        return jwt.verify(token , secret)
    }catch(err){
        console.log("This is the error from the JWT" + err);
    }
    // return jwt.verify(token , secret)
}

export {setuser , getuser}