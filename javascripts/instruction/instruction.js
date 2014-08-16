// View
Instruction.View = function(){}

Instruction.View.prototype = {
  render: function(instructions){
    /// TODO: add handlebars
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
      this.instructions = data.Definition // change JSON to Instruction
      this.displayInstruction(this.instructions)
    }.bind(this))
  },
  displayInstruction: function(instructions) {
    this.view.render(instructions)
  }
}
