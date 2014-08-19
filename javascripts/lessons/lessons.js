//------- View -----------
BustinBash.Lessons.View = function() {}

BustinBash.Lessons.View.prototype = {}

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
      this.db = data
      this.createNavigationButtons(data);
    }.bind(this))
},

 createNavigationButtons: function(data) {

 }
}


