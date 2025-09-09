const { render } = require("ejs");
const db = require("../db/queries");
const { body, validationResult } = require("express-validator");
const validateForm = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Author name can`t be empty.")
    .isAlpha()
    .withMessage("Author must contain only alphabetical characters.")
    .isLength({ max: 20 })
    .withMessage("Author must be 20 characters at most."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message can`t be empty.")
    .isLength({ max: 200 })
    .withMessage("Message must be 200 characters at most."),
];

function getForm(req, res) {
  res.render("form");
}
const postMessage = [
  validateForm,
  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('form.ejs',{errors:errors.array()})
    }
    const message = {
      username: req.body.name,
      message: req.body.message,
      date: new Date().toUTCString(),
    };
    await db.addMessage(message);
    res.redirect("/");
  },
];
module.exports = { getForm, postMessage };
