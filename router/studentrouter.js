var Express=require('express');
var {StudentModel}=require('../models/studentmodel');
const router= Express.Router();
router.get('/',(req,res)=>{
    res.send(" student details");
});
router.post('/students',async(req, res )=>{
    // var getname =req.body.name;
    // var getemailid =req.body.emailid;
    // var getplace=req.body.place;
    // var getphone=req.body.phone;
    // var getparentname=req.body.parentname;
    // var getparentphone=req.body.parentphone;
try {
    var stud= new studentModel(req.body);
    var result = await stud.save();
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
        var result =await studentModel.find();
        res.send(result);
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});
module.exports=router;