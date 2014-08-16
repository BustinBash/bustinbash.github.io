var data =
{
  "Title": "Print Working Directory",
  "Definition": "pwd (print working directory): This command will return the path of the directory you are currently viewing.",
  "Challenge": "Please type 'pwd' below.",
  "Answer": "pwd",
  "Hint1": "You want to Print the Working Directory to continue.",
  "Hint2": "Come on, we have it quoted just up there!",
  "Error": "Seems like you didn't type 'pwd'.  Try again.",
  "Success": "/usa/california/san_francisco"
}

// Model
Terminal.Model = function(){

}

// View
Terminal.View = function(){
  this.appendFeed = function(input){
      if (input === data.Answer){
        this.renderSuccess(input)
      } else {
        this.renderError(input)
      }
      this.clearText()
    }

    this.renderSuccess = function(input){
      $('.feed').append(
        "<p class='term-name'> BustinBash:- " + input +
        "<p class='term-success'>" + data.Success + '</p>'
        )
    }

    this.renderError = function(input){
      $('.feed').append(
        "<p class='term-name'> BustinBash:- " + input +
        "<p class='term-error'>" + data.Error + '</p>'
        )
    }

    this.clearText = function(){
      $('input').val("")
    }
  }

// Controller
Terminal.Controller = function(view, model){
  this.view = view;
  this.model = model;
  this.init = function(){
    this.bindListeners();
    console.log("Terminal Controller")
  }
  this.bindListeners = function() {
    $('.terminal').keypress(function(e){
      this.checkKey(e);
    }.bind(this));
  }
  this.checkKey = function(e) {
    if (e.which == 13) {
      var input = $('.input input').val();
      this.view.appendFeed(input)
    }
  }
}
