var Express=require('express');
var Parser=require('body-parser');
var Mongoose=require('mongoose');
var app=Express();
var Studentrouter=require('./router/studentrouter');
var Courserouter=require('./router/courserouter');
app.use(Parser.urlencoded({extended:false}))
Mongoose.connect("mongodb+srv://shinyjoseph:shiny@cluster0-aebge.mongodb.net/test?retryWrites=true&w=majority")
app.use('/',Studentrouter);
app.use('/course',Courserouter);
app.listen(process.env.PORT||4000,()=>{
    console.log("server staredd");
})