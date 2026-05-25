const { Router } = require("express");
const newMessageRouter = Router();

const { messages } = require("./indexRouter");

newMessageRouter.get("/", (req, res) => res.render("form"));
newMessageRouter.post("/", (req, res) => {
  const authorData = req.body.authorName;
  const messageData = req.body.messageText;
  messages.push({
    text: messageData,
    user: authorData,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = newMessageRouter;
