const express = require("express")
const Signupcollection  = require("./mongo")
const Contactcollection =require("./contactdb")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email}=req.body

    try{
        const check=await Signupcollection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{name,email,password}=req.body

    const Signupdata={
        name:name,
        email:email,
        password:password
    }

    try{
        const check=await Signupcollection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await Signupcollection.insertMany([Signupdata])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/Contact",async(req,res)=>{
    const{name,email,message}=req.body

    const Contactdata={
        name:name,
        email:email,
        message:message
    }

  
    try{
        const check=await Contactcollection.findOne({email:email})

        if(check){ await Contactcollection.insertMany([Contactdata])
            res.json("exist")
        }
        else{
            res.json("notexist")
            await Contactcollection.insertMany([Contactdata])
        }

    }
    catch(e){
        res.json("fail")
    }
  
})

app.listen(8000,()=>{
    console.log("port connected");
})

