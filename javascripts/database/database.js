BustinBash.Database.Model = function(controller) {
  this.fetch = function(){
    $.ajax({
      url: 'http://127.0.0.1:9393/',
      type: 'GET',
    }).done(function(data){
      controller.run(data)
    });
  }
}


BustinBash.Database.Controller = function() {
    this.run = function(data) {
      $(document).trigger('getData', data)
    }
  }