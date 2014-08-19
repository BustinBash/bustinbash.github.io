BustinBash.Storage.Model = function(){
	this.storage = []
}

BustinBash.Storage.Model.prototype = {
	loadStorage: function(){
		localStorage.setItem("levels", this.storage)
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
			this.addLevelToLocalStorage(data().ID);
			this.model.loadStorage()
		}.bind(this));
	},
	addLevelToLocalStorage: function(id){
		this.model.storage.push(id)
	}
}