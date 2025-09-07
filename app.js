const express = require('express');
const path = require('node:path');
const app =express();
const PORT = 8000;

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index');
})



app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log('Server is listening to PORT: ',PORT);
})