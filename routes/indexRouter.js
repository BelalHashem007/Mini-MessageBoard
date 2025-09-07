const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini MessageBoard", messages });
});
indexRouter.get("/new", (req, res) => {
  res.render("form");
});
indexRouter.get("/message/:id",(req,res)=>{
    const msg = messages.find(msg => msg.id===Number(req.params.id));
    if (!msg) throw Error("Message not found!");
    res.render('message',{msg,title:msg.user})
})
indexRouter.post("/new", (req, res) => {
  messages.push({
    id:messages.length+1,
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
