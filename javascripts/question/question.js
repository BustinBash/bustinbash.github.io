// View
Question.View = function(){}

Question.View.prototype = {
  render: function(question) {
    var source   = $("#question-template").html();
    var template = Handlebars.compile(source);
    var context = {question: question}
    var text    = template(context);
    $('.question').html(text)
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
      // this.question = data.Question; ///reminder: change to either question.
      this.displayQuestion(data.Question);
    }.bind(this));
  },
  displayQuestion: function(question){
    this.view.render(question)
  }
}