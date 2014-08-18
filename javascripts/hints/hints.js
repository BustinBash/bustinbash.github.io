// Model
Hints.Model = function() {}

// View
Hints.View = function() {}

Hints.View.prototype = {
  render: function(hint) {
    var source   = $("#hints-template").html();
    var template = Handlebars.compile(source);
    var context = {hint: hint}
    var text    = template(context);
    $('.hints').html(text)
  }
}

// Controller
Hints.Controller = function(view) {
  this.view = view;
}
Hints.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data) {
      this.data = data
    }.bind(this));

    $('#hint').on('click', function() {
      this.displayHint(this.data.Hint);
      }.bind(this));
  },
  displayHint: function(hint) {
    this.view.render(hint)
  }
}