// View
Instruction.View = function(){}

Instruction.View.prototype = {
  render: function(instructions){
    $(".instructions").html("<p>" + instructions + "</p>")
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
    $(document).on('changeLevel', function(event, data){
      console.log(data)
      this.displayInstructions(data.Instructions)
    }.bind(this))
  },
  displayInstructions: function(instructions) {
    this.view.render(instructions)
  }
}
