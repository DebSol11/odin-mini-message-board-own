const { Router } = require("express");

const openMessageRouter = Router();

const { messages } = require("./indexRouter");

openMessageRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    console.log(req.params);
    res.send(`Author ID: ${authorId}`);
});

module.exports = openMessageRouter;