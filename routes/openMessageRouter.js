const { Router } = require("express");
// const { getAuthorById } = require('../controllers/authorController');

const openMessageRouter = Router();

const { messages } = require("./indexRouter");

openMessageRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    console.log(req.params);
    res.send(`Author ID: ${authorId}`);
});

module.exports = openMessageRouter;