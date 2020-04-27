var Mongoose=require('mongoose');
const courseSchema= new Mongoose.Schema(
   { studentid:String,
    coursename:String,
    coursefee:Number,
    instructorname:String,
    duration:Number}
);
var courseModel=Mongoose.model('courses',courseSchema);
module.exports={courseModel}