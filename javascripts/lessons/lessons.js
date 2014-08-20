//------- View -----------
BustinBash.Lessons.View = function() {}

BustinBash.Lessons.View.prototype = {
  render: function(navigationButton) {
    $('#navbar_popup').append(navigationButton)
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
    this.view.render("<div class='tooltip levels' id='" + lesson + "' data-tooltip-content='" + lesson.Title + "'><img class='little' src='images/terminal.png'></div>")
  }
}
}

