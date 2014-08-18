Master.Controller = function() {}

Master.Controller.prototype = {
  init: function(){
    $(document).on('getData', function(event, data) {
      this.db = data
      this.bindListeners(this.db)
    }.bind(this)
    )
  },
  bindListeners: function(data) {
    this.masterData = data
    var self = this;
    $('.levels').on('click', function(e) {
      var id = $(this).attr('id')
      var level = data[id]
      $(document).trigger('changeLevel', level)
    });
    $(document).on('success', function(event, localData) {
      this.localData = localData()
      var self = this
      setTimeout(function(){
        self.switchLevel(self.localData, self.masterData);
      }, 5000)

    }.bind(this));
  },

  switchLevel: function(localData, masterData) {
    var lesson = masterData["Lesson" + (localData.ID + 1)]
    $(document).trigger('changeLevel', lesson)
  }
}