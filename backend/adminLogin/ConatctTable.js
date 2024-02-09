const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const ContacttableSchema = new mongoose.Schema({
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
});

const ContactTablecollection = mongoose.model('contact', ContacttableSchema);
module.exports=ContactTablecollection