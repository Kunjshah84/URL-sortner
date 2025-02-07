import express from 'express'
import {handleusersignup,handleuserslogin} from '../controllers/userauth.js' 
const router=express.Router()

router.post('/', handleusersignup)
router.post('/login', handleuserslogin)

router.get('/signup' ,(req,res) =>{
    return res.render('signup')
})
router.get('/login' ,(req,res) =>{
    return res.render('login')
})


export default router 