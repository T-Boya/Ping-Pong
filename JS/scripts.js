$("#submit").click(function(){
  $('#section2').gotoAnchor();
  $("#reset").click();
  return true;
});

var current_number = 0;
var interval = setInterval(document.getElementById("reset").onclick = function() {
    document.getElementById('number').innerHTML = ++current_number;
    if (current_number % 3 === 0){
    document.getElementById('number').innerHTML = "ping";
    }
    if (current_number % 5 === 0){
    document.getElementById('number').innerHTML = "pong";
    }   
    if (current_number % 15 === 0){
    document.getElementById('number').innerHTML = "ping-pong";
    }
    if (current_number > parseInt(document.getElementById("input").value)) {
        document.getElementById('number').innerHTML = 'Game Over';
        clearInterval(interval);
    }
}, 1000);