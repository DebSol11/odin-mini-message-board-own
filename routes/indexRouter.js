const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Hello Michael!",
    user: "Michael",
    added: new Date(),
  },
];

// async function getUserByName(authorName) {
//   return messages.find((message) => message.user === authorName);
// }

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);

module.exports = indexRouter;
// module.exports = { getUserByName };
// Exporting a variable in node.js
module.exports.messages = messages;
