var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var catchSchema = new Schema({
    word: String,
    definition: String,
});

var Phrase = mongoose.model('Phrase', catchSchema);
module.exports = Phrase;