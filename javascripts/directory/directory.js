BustinBash.Directory.View = function() {}

BustinBash.Directory.View.prototype = {

	hideAndShowDOM: function(data) {
			$(data.Hide).hide();
			$(data.Show).show();
			this.clearDom();
			this.appendCurrentFolder(data.Target)
		},

		clearDom: function() {
			$('#directory-template li').hide();
		},

		appendCurrentFolder: function(data) {
			$('.current-folder').text(data)
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
		this.view.hideAndShowDOM(data);
	}

}
