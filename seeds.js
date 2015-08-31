var db = require("./models");

var phrase_list =[
  {word: "http", definition: "protocol"},
  {word: "www.domain.com", definition: "host"},
  {word: "1234/", definition: "port"},
  {word: "/paht/to/resource", definition: "resource path"},
  {word: "?a=b&x=y", definition: "query"},

];

db.Phrase.remove({}, function(err, phrase){

  db.Phrase.create(phrase_list, function(err, subPhrase){
    if (err) { return console.log(err) };
    console.log("created", subPhrase.length, "phrase")
  })

});