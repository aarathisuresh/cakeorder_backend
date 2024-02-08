const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const cakeRouter=require("./controllers/cakeRouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://Aarathisuresh:Aarathi93@cluster0.qwgeh7q.mongodb.net/cakeDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/cake_order",cakeRouter)

app.listen(3002,()=>{

    console.log("Server running..")
})