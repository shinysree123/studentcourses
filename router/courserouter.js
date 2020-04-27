var Express=require('express');
var {courseModel}=require('../models/coursemodel');
const routers= Express.Router();
routers.get('/',(req,res)=>{
    res.send(" course details");
});
routers.post('/course',async(req, res )=>{
    var getname =req.body.studentid;
    var getcoursename =req.body.coursename;
    var getcoursefee=req.body.coursefee;
    var getinstructorname=req.body.instructorname;
    var getduration=req.body.duration;
try {
    var data = new courseModel(req.body);
    var result = await data.save();
    res.json(result);
    } 
catch (error) 
    {
    console.log(error);
    res.status(500).send(error);
    }   
});
routers.post('/viewall',async(req,res)=>{
    try {
        var result =await courseModel.find();
        res.send(result);
        
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});
module.exports=routers;