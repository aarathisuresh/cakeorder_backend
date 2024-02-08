const mongoose=require("mongoose")
const cakeSchema=new mongoose.Schema(
    {
        Name:String,
     cakename:String,
     weight:String,
     dateandtime:String,Chocolate brownie cake
     phone:String,
     Address:String
    }
)

module.exports=new mongoose.model("cake",cakeSchema)

