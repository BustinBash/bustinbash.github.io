Master.Controller = function() {}

Master.Controller.prototype = {
  init: function(){
    $(document).on('getData', function(event, data) {
      this.db = data
      this.bindListeners(this.db)
    }.bind(this)
    )
  },
  bindListeners: function(data){
      var self = this;
      $('.levels').on('click', function(e){
        var id = $(this).attr('id')
        var createFunction = "self." + id
        var func = eval(createFunction)
        var level = data.Navigation[id]
        $(document).trigger('changeLevel', level)
      });
      $(document).on('success', function(event, data){
        this.switchLevel(data);
      }.bind(this));
  },
  switchLevel: function(data) {
    var nextId = data().id + 1
    var lesson = "Lesson" + nextId
    //$(document).trigger('changeLevel', lesson)
  }
}





