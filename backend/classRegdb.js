const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Manas")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const ClassRegSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    requirement:{
        type:String,
        required:true
    }
})


const ClassRegcollection = mongoose.model("classreg",ClassRegSchema)


module.exports=ClassRegcollection
