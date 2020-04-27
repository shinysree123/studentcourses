var Mongoose=require('mongoose');
const studentSchema= new Mongoose.Schema(
    Name:String,
    Emailid:String,
    Place:String,
    Phone:Number,
    Parentname:String,
    Parentphone:Number,
);
var studentModel=Mongoose.model('students',studentSchema);
module.exports={studentModel}