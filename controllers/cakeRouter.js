const express=require("express")
const router=express.Router()
const cakeModels=require("../models/cakeModel")
const { models } = require("mongoose")


router.post("/add",async(req,res)=>{
 let data=req.body
 let cake=new cakeModels(data)
 let result=await cake.save()
 res.json({

    status:"Success"
 })

})
module.exports=router