//------- View -----------
BustinBash.Lessons.View = function() {}

BustinBash.Lessons.View.prototype = {

  render: function(lesson, title) {
    var source   = $("#lessons-template").html();
    var template = Handlebars.compile(source);
    var context = {lesson: lesson, title: title}
    var text    = template(context);
    this.updateDOM(text)
  },

  updateDOM: function(text) {
    $('#navbar_popup').append(text)
 }
}

//----- Controller -------

BustinBash.Lessons.Controller = function(view) {
  this.view = view;
}

BustinBash.Lessons.Controller.prototype = {
 init: function() {
  this.bindListeners();
},

bindListeners: function() {
  $(document).on('getData', function(event, data) {
    this.createNavigationButtons(data);
  }.bind(this))
},

createNavigationButtons: function(data) {
  for (lesson in data) {
    this.view.render(lesson, data[lesson].Title)
  }
}
}

