// Model
// Directory.Model = function(){

// }

// View
Directory.View = function(){}

Directory.View.prototype = {
	animate2: function() {
		alert('hi')
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
			this.data = data;
		}.bind(this));

		$(document).on('success', function(){
			this.checkLevel(this.data)
		}.bind(this));
	},

	checkLevel: function(data) {
		var id = data.id
		var createFunction = "this.view.animate" + id
		var animateThis = eval(createFunction)
		if(typeof(animateThis) === "function"){
			animateThis()
		}
	}

}

// Controller
