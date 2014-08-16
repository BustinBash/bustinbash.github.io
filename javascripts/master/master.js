Master.Controller = function() {}

Master.Controller.prototype = {
  init: function(){
    $(document).on('getData', function(event, data) {
      this.db = data
      // this.levelOneData(this.db)
    }.bind(this)
    )
    this.bindListeners()
  },
  bindListeners: function(){
    $("#level_one").on('click', this.levelOneData.bind(this) )
    $("#level_two").on('click', this.levelTwoData.bind(this) )
    $("#level_three").on('click', this.levelThreeData.bind(this) )
  },
  levelOneData: function(){
    var level = this.db.Navigation.Lesson1
    $(document).trigger('changeLevel', level)
  },
  levelTwoData: function(){
    var level = this.db.Navigation.Lesson2
    $(document).trigger('changeLevel', level)
  },
  levelThreeData: function(){
    var level = this.db.Navigation.Lesson3
    $(document).trigger('changeLevel', level)
  }
}





