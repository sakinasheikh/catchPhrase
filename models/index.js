var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catchPhrase");

module.exports.Phrase = require("./phrase");