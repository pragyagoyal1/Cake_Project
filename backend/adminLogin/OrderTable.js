const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const OrdertableSchema = new mongoose.Schema({
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
});

const OrderTablecollection = mongoose.model('order', OrdertableSchema);
module.exports=OrderTablecollection