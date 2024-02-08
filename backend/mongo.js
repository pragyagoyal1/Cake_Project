const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Manas")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const SignupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Signupcollection = mongoose.model("collections",SignupSchema)

module.exports=Signupcollection
