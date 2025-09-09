const db = require("../db/queries");
const NotFoundError = require("../errors/NotFoundError");
const { param, validationResult } = require("express-validator");

const validateId = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("Id can`t be empty.")
    .isInt()
    .withMessage("Id must be integer."),
];

async function getMessages(req, res, next) {
  const messages = await db.getMessages();
  if (!messages) next(new Error("Failed to get messages!"));
  res.render("index", { title: "Mini MessageBoard", messages });
}
const getMessageById = [
  validateId,
  async function (req, res, next) {
    console.log(req.params)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      const messages = await db.getMessages();
      return res
        .status(400)
        .render("index",{title: "Mini MessageBoard", messages , errors:errors.array()});
    }
    const id = Number(req.params.id);
    const msg = await db.getMessageById(id);
    if (!msg) next(new NotFoundError("Message not found."));
    res.render("message", { msg: msg[0], title: msg[0].user });
  },
];

module.exports = { getMessages, getMessageById };
