const { messages } = require("../routes/indexRouter");

exports.usersMessageGet = (req, res) => {
    const user = messages.getUser(req.params.user);
    res.render("Test");
};