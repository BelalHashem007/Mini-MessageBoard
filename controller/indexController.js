const db = require("../db/queries");
const NotFoundError = require("../errors/NotFoundError");

async function getMessages(req, res, next) {
  const messages = await db.getMessages();
  if (!messages) next(new Error("Failed to get messages!"));
  res.render("index", { title: "Mini MessageBoard", messages });
}
async function getMessageById(req, res, next) {
  const id = Number(req.params.id);
  const msg = await db.getMessageById(id);
  if (!msg) next(new NotFoundError("Message not found."));
  res.render('message',{msg:msg[0],title:msg[0].user})
}

module.exports = { getMessages, getMessageById };
