BustinBash.Storage.Model = function(){
	this.currentLesson = ""
}

BustinBash.Storage.Model.prototype = {
	loadStorage: function(){
		localStorage.setItem("lesson", this.currentLesson)
	}	
}
BustinBash.Storage.Controller = function(model){
	this.model = model
}

BustinBash.Storage.Controller.prototype = {
	init: function(){
		this.bindListeners();
	},
	bindListeners: function(){
		$(document).on('success', function(event, data){
			this.setLesson(data().ID);
			this.model.loadStorage()
		}.bind(this));
	},
	setLesson: function(id){
		this.model.currentLesson = id
	}
}