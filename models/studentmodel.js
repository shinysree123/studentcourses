var Mongoose=require('mongoose');
const studentSchema= new Mongoose.Schema(
    {
    name:String,
    emailid:String,
    place:String,
    phone:String,
    parentname:String,
    parentphone:String

}
);
var studentModel=Mongoose.model('students',studentSchema);
module.exports={studentModel}