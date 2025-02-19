import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name : {
        type : String ,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true 
    },
    password : {
        type : String,
        require : true 
    },
    roles:{
        type: String,
        required:true,
        default:"NORMAL"
    }
},{timestamps : true})

const usermodel = mongoose.model('usermodel' , userschema)
export default  usermodel