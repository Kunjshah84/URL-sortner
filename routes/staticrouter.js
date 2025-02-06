import express from "express";
import url from "../models/user.js"
const router = express.Router();
router.get('/' , async (req,res)=>{
    const alltheurls = await url.find({})
    return res.render('home',{
        urls : alltheurls
    })
})

export default router;