const express = require("express")
const Signupcollection  = require("./backend/mongo")
const Contactcollection =require("./backend/contactdb")
const ClassRegcollection =require("./backend/classRegdb")
const Logindatacollection =require("./backend/adminlogin")
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const PORT = process.env.PORT || 5000;




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
app.post("/classregs",async(req,res)=>{
    const{name,phone,requirement}=req.body

    const ClassRegdata={
        name:name,
        phone:phone,
        requirement:requirement
    }

  
    try{
        const check=await ClassRegcollection.findOne({email:email})

        if(check){ await ClassRegcollection.insertMany([ClassRegdata])
            res.json("exist")
        }
        else{
            res.json("notexist")
            await ClassRegcollection.insertMany([ClassRegdata])
        }

    }
    catch(e){
        res.json("fail")
    }
  
})
app.get('/data', async (req, res) => {
    try {
      const Logindata = await Logindatacollection.find();
      res.json(Logindata);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(8000,()=>{
    console.log("port connected");
})

