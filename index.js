// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA //
 
 var db = require("./models");

// ROUTES //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

app.get("/phrase", function (req, res){
  // render phrase index as JSON
  db.Phrase.find({}, function (err, phrase) {
    if (err) {
      console.log (err);
      return res.sendStatus(400);
    }
      res.send(phrase);
      
  });
});

app.post("/phrase", function (req, res){

    var newPhrase = req.body
    db.Phrase.create(newPhrase, function (err, phrase) {
        if (err) {
          console.log(err);
          return res.sendStatus(400);
        }
        console.log("I WANT TO POST " + newPhrase);
        res.send(newPhrase);
    });
});

app.delete("/phrase/:id", function (req, res){
  // set the value of the id
    var xPhrase = req.params.id
    console.log(xPhrase + " what am i")
    db.Phrase.remove({_id: xPhrase}, function (err, phrase) {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log("take it away " + xPhrase);
      res.send(xPhrase);
    });
});


app.listen(3001, function (){
  console.log("listening on port 3001");
});