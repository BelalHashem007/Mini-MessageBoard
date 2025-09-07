const { Router } = require("express");
const Controller = require('../controller/indexController');
const indexRouter = Router();

indexRouter.get("/",Controller.getMessages);
indexRouter.get("/message/:id",Controller.getMessageById)

module.exports = indexRouter;
