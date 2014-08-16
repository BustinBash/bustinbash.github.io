// Model
// Directory.Model = function(){

// }

// View
Directory.View = function(){}

Directory.View.prototype = {
	renderBeforeDirectory: function(before){
		$("#" + before).css("background-color", "yellow");
	},
	renderAfterDirectory: function(before, after) {
		$("#" + before).css("background-color", "")
		$("#" + after).css("background-color", "yellow")
	}
}


Directory.Controller = function(view){
	this.view = view;
}

Directory.Controller.prototype = {
	init: function() {
		this.bindListeners();
	},
	bindListeners: function() {
		$(document).on('changeLevel', function(event, data){
			this.after = data.After;
			this.before = data.Before;
			this.createBeforeDir(this.before);
		}.bind(this));

		$(document).on('success', function(){
			this.createAfterDir(this.before, this.after)
		}.bind(this));
	},
	createBeforeDir: function(before){
		this.view.renderBeforeDirectory(before);
	},
	createAfterDir: function(before, after) {
		this.view.renderAfterDirectory(before, after)
	}
}

// Controller