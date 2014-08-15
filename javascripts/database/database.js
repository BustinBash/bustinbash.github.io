Database = function() {
  console.log("Database")
  var self = this
  this.fetch = function() {
    var url = "https://radiant-fire-9915.firebaseio.com/";
    var firebaseRef = new Firebase(url);
    firebaseRef.on("value", function(snap) {
      self.store = JSON.stringify(snap.val())
      self.store = JSON.parse(self.store)
    })
  }
}



// data = new Database
// data.fetch()
// data.store
