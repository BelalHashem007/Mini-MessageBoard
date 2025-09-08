const db = require("../data");

function getForm(req, res) {
  res.render("form");
}
function postMessage(req, res,next) {
    if (!req.body.name || !req.body.message) next(new Error("Missing data."))
  const message = {
    text: req.body.message,
    user: req.body.name,
    added: new Date().toUTCString(),
  };
  db.postMessage(message);
  res.redirect('/');
}
module.exports = { getForm,postMessage };
