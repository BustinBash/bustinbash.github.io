BustinBash.Database.Model = function() {
  var self = this
  controller = new BustinBash.Database.Controller
  this.fetch = function(controller) {
    var url = "https://radiant-fire-9915.firebaseio.com/";
    var firebaseRef = new Firebase(url);
    firebaseRef.on("value", function(snap) {
      self.store = JSON.parse(JSON.stringify(snap.val()))
      controller.run(self.store)
    })
  }
}

BustinBash.Database.Controller = function() {
    this.run = function(data) {
      $(document).trigger('getData', data)
    }
  }

// data = new Database
// data.fetch()
// data.store
