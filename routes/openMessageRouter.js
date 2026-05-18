const { Router } = require("express");
const openMessageRouter = Router();

const { messages } = require("./indexRouter");

openMessageRouter.get("/:user", (req, res) => {
    console.log(req.params);
    res.end();
});

module.exports = openMessageRouter;