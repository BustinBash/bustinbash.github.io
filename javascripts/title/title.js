// View
Title.View = function() {}
Title.View.prototype = {
  render: function(title) {
    var source   = $('#title-template').html();
    var template = Handlebars.compile(source);
    var context = {title: title}
    var text    = template(context);
    $('.title').html(text)
  }
}

// Controller
Title.Controller = function(view) {
  this.view = view;
}
Title.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data) {
      this.displayTitle(data.Title);
    }.bind(this));
  },
  displayTitle: function(title) {
    this.view.render(title)
  }
}