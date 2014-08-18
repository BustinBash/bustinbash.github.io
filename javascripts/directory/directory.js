Directory.View = function(){}

Directory.View.prototype = {
	functionCollection: {
		1: function(){

		},

		2: function(data) {
			this.clearDom();
			var currentFolder = data.master
			this.appendCurrentFolder(currentFolder)
			data.Branches.forEach(function(folder){
				$('#directory-template').append("<li><img class='folder-icon' src='images/folder.png'><span class='folder-text'>" + folder + "</span></li>")
			});
		},

		clearDom: function(){
			$('#directory-template li').hide();
		},
		appendCurrentFolder: function(data){
			$('.current-folder').text(data)
		}
	},

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
		var id = data.ID
		this.view.functionCollection[id](data);
	}

}
