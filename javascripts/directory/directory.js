BustinBash.Directory.View = function() {}

BustinBash.Directory.View.prototype = {
	functionCollection: {
		// ~> pwd
		1: function() {

		},

		// ~> ls
		2: function(data){

		},

		// ~> cd usa
		3: function(data){
			$('.states, #divider3').show();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> cd ..
		4: function(data){
			$('.states, .places, #divider3').hide();
			$('#divider4').show();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> cd usa/ca/san_francisco
		5: function(data){
			$('.states, .cities, .places, #divider3, #divider4').show();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> touch the_bay.txt
		6: function(data){
			$('#the_bay').show();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> rm the_bay.txt
		7: function(data){
			$('#the_bay').hide();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> cd ..
		8: function(data){
			$('.places').hide();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> mkdir marin
		9: function(data){
			$('#marin').show();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> rmdir marin
		10: function(data){
			$('#marin').hide();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> cd
		11: function(data){
			$('.states, .cities, .places, #divider3, #divider4').hide();
			this.appendCurrentFolder(data.Target)
			this.clearDom()
		},

		// ~> echo Bustin Bash
		12: function(){

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

	thisLevel: function(data){
		var id = data.ID - 1
		this.view.functionCollection[id](data);
	},

	checkLevel: function(data) {
		this.view.functionCollection[data.ID](data);
	}

}
