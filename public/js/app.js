$(function() {
  pageLoad();
});


function pageLoad() {
  // load foods
  getPhrases();
  // set event listeners
  $("#new-phrase-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post to food#create
    $.post("/phrase", $(this).serialize())
      .done(function(res){
        // append new food to the page
        getPhrases();
        $("#new-phrase-form")[0].reset();
      });
  });
}

function getPhrases() {
  $.get("/phrase", function(res){
    var phrases = res.reverse();
    // grab template
    renderPhrases(phrases)
  });
}

function renderPhrases(phrase) {
  template = _.template($("#word-template").html());
  // input into template and append to parent
  catchItems = phrase.map(function(phrase) {
    return template(phrase);
  });
  // clear content (for repeated use)
  $("#phrase-ul").html("");
  // append to ul
  $("#phrase-ul").append(catchItems);
}

function deletePhrase(context) {
  var phraseId = $(context).data()._id;
  $.ajax({
    url: '/phrase/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      // once successfull, re-render all 
      getPhrases();
    }
  });
}