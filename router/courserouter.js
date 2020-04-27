var Express=require('express');
var {courseModel}=require('../models/coursemodel');
const router= Express.Router();

router.get('/',(req,res)=>{
    res.send(" course details");
});
router.post('/course',async(req, res )=>{
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
router.post('/viewall',async(req,res)=>{
    try {
        var result =await courseModel.find();
        res.send(result);
        
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});
module.exports=router;