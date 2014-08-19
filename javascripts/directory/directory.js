BustinBash.Directory.View = function() {}

BustinBash.Directory.View.prototype = {
	functionCollection: {
		1: function() {

		},

		2: function(data){
			$('.states').show();
			$('#divider3').show();
			$('.current-folder').text(data.Target)
		},
		3: function(data){
			$('.states').hide();
			$('#divider3').hide();
			$('.places').hide();
			$('#divider4').show();
			$('.states').hide();
			$('.current-folder').text(data.Target)
		},
		4: function(data){
			$('.states').show();
			$('#divider3').show();
			$('.cities').show()
			$('#divider4').show();
			$('.places').show()
			$('.current-folder').text(data.Target)
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
			this.thisLevel(data)
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
