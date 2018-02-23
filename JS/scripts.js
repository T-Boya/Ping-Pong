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