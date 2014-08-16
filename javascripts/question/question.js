// Model
Question.Model = function(){

}

// View
Question.View = function(){}

Question.View.prototype = {
  apppendQuestion: function(question) {
    $('.question').append("<p>" + question + "</p>") // add handlebars
  }
}

// Controller
Question.Controller = function(view, model){
  this.view = view;
  this.model = model;
}
Question.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data){
      this.question = data.Challenge; ///reminder: change to either challenge or question.
      this.displayQuestion(this.question);
    }.bind(this));
  },
  displayQuestion: function(question){
    this.view.apppendQuestion(question)
  }
}
