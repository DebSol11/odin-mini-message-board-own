const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

// app.get("/", (req, res) => {
//   console.log("Here");
//   res.send("hi");
// });


app.use("/", indexRouter);
app.use("/new", newMessageRouter);

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
