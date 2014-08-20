BustinBash.Master.Controller = function() {}

BustinBash.Master.Controller.prototype = {
  init: function(){
    $(document).on('getData', function(event, data) {
      this.db = data
      this.bindListeners(this.db)
      this.getLocalStorage();
      this.autoLoadFirst(this.db)
    }.bind(this)
    )
  },
  bindListeners: function(data) {
    this.masterData = data
    var self = this;

    $('.navbar').on('click', function(e) {
      self.deleteHint()
      var elementId = e.target.parentElement.id
      var id = self.masterData[elementId].ID
      var dirID = self.masterData[elementId].ID - 1
      var level = self.masterData["Lesson"+id]
      $(document).trigger('changeLevel', level)
      $(document).trigger('clickLevel', self.masterData["Lesson"+dirID])

    });

    $(document).on('success', function(event, localData) {
      this.deleteHint();
      this.localData = localData()
      var self = this
      setTimeout(function(){
        self.switchLevel(self.localData, self.masterData);
      }, 1000)

    }.bind(this));
  },
  deleteHint: function(){
    $('.hints').children().first().html("")
  },

  getLocalStorage: function() {
    if (localStorage.lessons != undefined) {
      var storage = localStorage.lessons.split(',').sort()
      this.storage = storage[storage.length - 1]
    }
  },

  autoLoadFirst: function(data){
    if (this.storage != ""){
      var currentLesson = data["Lesson" + (parseInt(this.storage) + 1)]
      $(document).trigger('changeLevel', currentLesson)
    } else {
      var currentLesson = data.Lesson1
      $(document).trigger('changeLevel', currentLesson)
    }
  },

  switchLevel: function(localData, masterData) {
    var lesson = masterData["Lesson" + (localData.ID + 1)]
    $(document).trigger('changeLevel', lesson)
  }

}