const {Router} = require('express');
const Controller = require('../controller/newController')
const newRouter = Router();

newRouter.get('/',Controller.getForm);
newRouter.post('/',Controller.postMessage);

module.exports = newRouter;