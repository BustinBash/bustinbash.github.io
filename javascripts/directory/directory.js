BustinBash.Directory.View = function() {}

BustinBash.Directory.View.prototype = {

	hideAndShowDOM: function(data) {
		if(data != undefined){	
			$(data.Hide).hide();
			$(data.Show).show();
			this.clearDom();
		}
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
			this.clickLevel(this.data)
		}.bind(this));

		$(document).on('success', function() {
			if(this.data.ID <= 12 ){
				this.checkLevel(this.data)
			}
		}.bind(this));
	},

	checkLevel: function(data) {
		this.view.hideAndShowDOM(data);
	},

	clickLevel: function(data){
		$(document).on('clickLevel', function(event, data){
			this.view.hideAndShowDOM(data);
		}.bind(this))
	}

}
