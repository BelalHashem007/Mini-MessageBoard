const express = require('express');
const path = require('node:path');
const app =express();
const PORT = 3000;
//routers
const indexRouter = require('./routes/indexRouter');

//setup
app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));


app.use('/',indexRouter);



app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log('Server is listening to PORT: ',PORT);
})