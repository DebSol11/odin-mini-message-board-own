const { Router } = require("express");
const newMessageRouter = Router();

const { messages } = require("./indexRouter");

newMessageRouter.get("/", (req, res) => res.render("form"));
newMessageRouter.post("/", (req, res) => {
  const formData = req.body;
  const authorData = req.body.authorName;
  const messageData = req.body.messageText;
  console.log(formData);
  console.log(req.body.authorName);
  console.log(req.body.messageText);
  console.log(messages);
  messages.push({ text: messageData, user: authorData, added: new Date() });
  console.log(messages);
  res.redirect("/");
});

module.exports = newMessageRouter;
