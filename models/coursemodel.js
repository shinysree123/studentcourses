var Mongoose=require('mongoose');
const courseSchema= new Mongoose.Schema(
   {
     studentid:String,
    coursename:String,
    coursefee:String,
    instructorname:String,
    duration:String
}
);
var courseModel=Mongoose.model('courses',courseSchema);
module.exports={courseModel}