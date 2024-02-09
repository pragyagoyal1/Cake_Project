const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/CakesNShapes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const ClassRegtableSchema = new mongoose.Schema({
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
});

const ClassRegTablecollection = mongoose.model('classreg', ClassRegtableSchema);
module.exports=ClassRegTablecollection