const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const Contactcollection = mongoose.model("contacts",ContactSchema)


module.exports=Contactcollection
