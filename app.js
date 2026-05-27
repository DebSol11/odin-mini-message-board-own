const express = require("express");
const app = express();

const { messages } = require("./routes/indexRouter");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.get("/:user", (req, res) => {
  const userName = req.params.user;
  console.log(userName);
  res.render("user", { title: userName, messages : messages})
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
