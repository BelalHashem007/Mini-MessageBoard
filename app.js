const express = require('express');
const path = require('node:path');
const NotFoundError = require('./errors/NotFoundError')
const app =express();
const PORT = 3000;
//routers
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

//setup
app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));

app.use('/new',newRouter);
app.use('/',indexRouter);

app.use((req, res, next) => {
    throw new NotFoundError("Page not found.");
  });
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.statusCode ||500).send(`${err.name}: ${err.message}`);
})

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log('Server is listening to PORT: ',PORT);
})