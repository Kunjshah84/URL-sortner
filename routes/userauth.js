import express from 'express'
import {handleusersignup} from '../controllers/userauth.js' 
const router=express.Router()

router.post('/', handleusersignup)

router.get('/signup' ,(req,res) =>{
    return res.render('signup')
})


export default router 