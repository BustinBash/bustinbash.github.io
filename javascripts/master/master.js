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
    this.masterData = data
    var self = this;
    $('.levels').on('click', function(e){
      var id = $(this).attr('id')
      var level = data[id]
      $(document).trigger('changeLevel', level)
    });
    $(document).on('success', function(event, localData){
      this.localData = localData()
      this.switchLevel(this.localData, this.masterData);
    }.bind(this));
  },
  switchLevel: function(localData, masterData) {
    var self = this
    var nextId = localData.ID + 1
    var nextLesson = "Lesson" + nextId
    var lesson = masterData[nextLesson]
    $(document).trigger('changeLevel', lesson)
  }
}





