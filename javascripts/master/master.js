Master.Controller = function() {}

Master.Controller.prototype = {
  init: function(){
    $(document).on('getData', function(event, data) {
      this.db = data
      this.bindListeners(this.db)
      this.autoLoadFirst(this.db)
    }.bind(this)
    )
  },
  bindListeners: function(data) {
    this.masterData = data
    var self = this;
    $('.levels').on('click', function(e) {
      self.deleteHint()
      var id = $(this).attr('id')
      var level = data[id]
    $(document).trigger('changeLevel', level)
    });
    $(document).on('success', function(event, localData) {
      this.localData = localData()
      var self = this
      setTimeout(function(){
        self.switchLevel(self.localData, self.masterData);
      }, 2000)

    }.bind(this));
  },
  deleteHint: function(){
    $('.hints').children().first().html("")
  },

  autoLoadFirst: function(data){
    var firstLesson = data.Lesson1
    $(document).trigger('changeLevel', firstLesson)
  },

  switchLevel: function(localData, masterData) {
    var lesson = masterData["Lesson" + (localData.ID + 1)]
    $(document).trigger('changeLevel', lesson)
  }

}