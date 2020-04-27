var Express=require('express');
var {StudentModel}=require('../models/studentmodel');
const router= Express.Router();
router.get('/',(req,res)=>{
    res.send(" student details");
});
router.post('/students',async(req, res )=>{
    var getname =req.body.Name;
    var getEmailid =req.body.Emailid;
    var getPlace=req.body.Place;
    var getPhone=req.body.Phone;
    var getParentname=req.body.Parentname;
    var getParentphone=req.body.Parentphone;
try {
    var studentdata = new studentModel(req.body);
    var result = await studentdata.save();
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