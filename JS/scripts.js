// Scroll to Bottom Begins
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 0, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

// Scroll to Bottom Ends

// Game Begins
var input = document.getElementById('submit');
var factor = 0
$(document).ready(function(){
  $("a").on('click', function(event) {
for (factor = 0; factor <= input; factor++) {
    if (input % 3 === 0){
    var pingOutput = document.getElementByClassName('ping');
    numberOutput.textCont = "ping";
    }
    else if (input % 5 === 0){
      var pingOutput = document.getElementByClassName('pong');
      numberOutput.textCont = "pong";
    }
    else if (input % 15 === 0){
      var pingOutput = document.getElementByClassName('ping');
      numberOutput.textCont = "ping";
      var pingOutput = document.getElementByClassName('pong');
      numberOutput.textCont = "pong";
    }
    else {
    var numberOutput = document.getElementByClassName('number');
    numberOutput.textCont = "factor";
    }
  }
});
// Game Ends


// BUSINESS LOGIC




//test area
var input = 50
var seconds_left = 0;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = ++seconds_left;
    if (seconds_left % 3 === 0){
      document.getElementById('timer_div').innerHTML = "ping";
    }
    if (seconds_left % 5 === 0){
    document.getElementById('timer_div').innerHTML = "pong";
    }
    if (seconds_left % 15 === 0){
    document.getElementById('timer_div').innerHTML = "ping-pong";
    }         
    if (seconds_left >= input)
    {
       document.getElementById('timer_div').innerHTML = "Game Over!";
       clearInterval(interval);
    }
}, 1000);