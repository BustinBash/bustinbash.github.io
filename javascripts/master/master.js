Master.Controller = function() {

}

Master.Controller.prototype.init = function() {
  $(document).on('getData', function(event, data) {
    console.log(data)
  })
}
