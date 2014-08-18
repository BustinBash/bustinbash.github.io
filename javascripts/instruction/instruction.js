Instruction.View = function() {}

Instruction.View.prototype = {
  render: function(instructions){
    var source   = $("#instruction-template").html();
    var template = Handlebars.compile(source);
    var context = {instruction: instructions}
    var text    = template(context);
    $('.instrutions').html(text)
  }
}

// Controller
Instruction.Controller = function(view) {
  this.view = view;
}

Instruction.Controller.prototype = {
  init: function() {
    this.bindListeners();
  },
  bindListeners: function() {
    $(document).on('changeLevel', function(event, data) {
      this.displayInstructions(data.Instructions)
    }.bind(this))
  },
  displayInstructions: function(instructions) {
    this.view.render(instructions)
  }
}