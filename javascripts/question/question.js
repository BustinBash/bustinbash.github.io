// View
Question.View = function(){}

Question.View.prototype = {
  render: function(question) {
    //when we send to handlebars {'question': question }
  }
}

// Controller
Question.Controller = function(view){
  this.view = view;
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
    this.view.render(question)
  }
}
