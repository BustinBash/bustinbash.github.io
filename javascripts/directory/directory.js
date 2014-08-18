Directory.View = function() {}

Directory.View.prototype = {
	functionCollection: {
		1: function() {

		},
		
		2: function(data){
			this.clearDom();
			var currentFolder = data.master
			this.appendCurrentFolder(currentFolder)
			var folders = data.Branches
			this.render(folders)
		},
		render: function(folders){
			var source   = $("#directory-template-script").html();
			var template = Handlebars.compile(source);
			var context = {folderCollection: folders }
			var text    = template(context);
			$('#directory-template').html(text)
		},


		clearDom: function() {
			$('#directory-template li').hide();
		},
		appendCurrentFolder: function(data) {
			$('.current-folder').text(data)
		}
	}

}


Directory.Controller = function(view) {
	this.view = view;
}

Directory.Controller.prototype = {
	init: function() {
		this.bindListeners();
	},
	bindListeners: function() {
		$(document).on('changeLevel', function(event, data) {
			this.data = data;
		}.bind(this));

		$(document).on('success', function() {
			this.checkLevel(this.data)
		}.bind(this));
	},

	checkLevel: function(data) {
		this.view.functionCollection[data.ID](data);
	}

}
