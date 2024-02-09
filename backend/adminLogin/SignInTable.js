const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const LogindataSchema = new mongoose.Schema({
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
});

const Logindatacollection = mongoose.model('collection', LogindataSchema);
module.exports=Logindatacollection