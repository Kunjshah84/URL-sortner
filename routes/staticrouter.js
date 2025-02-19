import express from "express";
import url from "../models/user.js"
import { restrictto } from "../middlewares/auth.js";
const router = express.Router();

router.get('/admin/urls' , restrictto(['ADMIN']) , async  (req,res) =>{
    const alltheurls = await url.find({})
    return res.render('home',{
        urls : alltheurls
    })
})

router.get('/' , restrictto(['NORMAL' , 'ADMIN']),async (req,res)=>{
    // if(!req.user)   return res.redirect('/user/login')
    const alltheurls = await url.find({ createdby : req.user._id})
    return res.render('home',{
        urls : alltheurls
    })
})


export default router;