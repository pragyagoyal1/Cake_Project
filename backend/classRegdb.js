const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes")
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


const ClassRegcollection = mongoose.model("classregs",ClassRegSchema)


module.exports=ClassRegcollection
