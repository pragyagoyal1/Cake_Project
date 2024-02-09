const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const CheckOutSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    total_item:{
        type:String, 
        required:true
    },
    total_amount:{
        type:String,
        required:true
    }
})

const CheckOutcollection = mongoose.model("orders",CheckOutSchema)

module.exports=CheckOutcollection
