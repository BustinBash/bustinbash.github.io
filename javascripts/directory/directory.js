BustinBash.Directory.View = function() {}

BustinBash.Directory.View.prototype = {
	functionCollection: {
		1: function() {

		},

		2: function(data){
			this.clearDom();
			var currentFolder = data.Target
			this.appendCurrentFolder(currentFolder)
			var folders = data.Branches
			this.render(folders)
		},
		render: function(folders){
			var source   = $("#directory-template").html();
			var template = Handlebars.compile(source);
			var context = {folderCollection: folders }
			var text    = template(context);
			$('#directory-images').html(text)
		},
		3: function(){

		},
		4: function(){

		},
		5: function(){

		},
		6: function(){

		},

		7: function(){

		},

		8: function(){

		},

		9: function(){

		},

		10: function(){

		},

		11: function(){

		},



		clearDom: function() {
			$('#directory-template li').hide();
		},
		appendCurrentFolder: function(data) {
			$('.current-folder').text(data)
		}
	}

}


BustinBash.Directory.Controller = function(view) {
	this.view = view;
}

BustinBash.Directory.Controller.prototype = {
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
