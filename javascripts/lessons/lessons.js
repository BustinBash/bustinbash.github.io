//------- View -----------
BustinBash.Lessons.View = function() {}

BustinBash.Lessons.View.prototype = {
  render: function(navigationButton) {
    $('#navbar_popup').append(navigationButton)
  },
  renderSuccessButton: function(id){
  $('#Lesson' + id + " img")[0].src = "images/terminal_success.png"
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
    this.db = data
    this.getLocalStorage();
    this.createNavigationButtons(data);
  }.bind(this));
  $(document).on('success', function(event, data){
    this.getLocalStorage();
    this.replaceButton(data().ID);
  }.bind(this));
},
createNavigationButtons: function(data) {
  var lessonArray = Object.keys(data)
  for (var i = 0; i < lessonArray.length; i++) {
    if (this.completedLessons != undefined && (this.completedLessons[i] - 1 == i)){
      this.view.render("<div class='tooltip levels' id='" + lessonArray[i] + "' data-tooltip-content='" + data[lessonArray[i]].Title + "'><img class='little' src='images/terminal_success.png'></div>")
    } else {
      this.view.render("<div class='tooltip levels' id='" + lessonArray[i] + "' data-tooltip-content='" + data[lessonArray[i]].Title + "'><img class='little' src='images/terminal.png'></div>")
    }
  }
},
getLocalStorage: function(){
  if (localStorage.lessons != undefined) {
    this.completedLessons = localStorage.lessons.split(',').sort();
  }
},
replaceButton: function(id) {
  this.view.renderSuccessButton(id)
}

}