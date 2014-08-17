// Model
Hints.Model = function(){}

// View
Hints.View = function(){}

Hints.View.prototype = {
  render: function() {
    console.log("hi there b")
  }
}

// Controller
Hints.Controller = function(view){
  this.view = view;
}
Hints.Controller.prototype = {
  init: function(){
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data){
      this.data = data
    }.bind(this));

    $('#hint').on('click', function(){
      this.displayHint(this.data.hint);
      }.bind(this));
  },
  displayHint: function(hint){
    this.view.render(hint)
  }
}