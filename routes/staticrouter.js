import express from "express";
import url from "../models/user.js"
const router = express.Router();
router.get('/' , async (req,res)=>{
    if(!req.user)   return res.redirect('/login')
    const alltheurls = await url.find({ createdby : req.user._id})
    return res.render('home',{
        urls : alltheurls
    })
})


export default router;