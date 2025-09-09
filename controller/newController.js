const db = require("../db/queries");

function getForm(req, res) {
  res.render("form");
}
async function postMessage(req, res,next) {
    if (!req.body.name || !req.body.message) next(new Error("Missing data."))
  const message = {
    username: req.body.name,
    message: req.body.message,
    date: new Date().toUTCString(),
  };
  await db.addMessage(message);
  res.redirect('/');
}
module.exports = { getForm,postMessage };
