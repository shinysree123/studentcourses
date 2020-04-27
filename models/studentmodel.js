var Mongoose=require('mongoose');
const studentSchema= new Mongoose.Schema(
    {
    name:String,
    emailid:String,
    place:String,
    phone:Number,
    parentname:String,
    parentphone:Number

}
);
var studentModel=Mongoose.model('students',studentSchema);
module.exports={studentModel}