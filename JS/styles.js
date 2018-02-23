$(document).ready(function() {
   
    $('#scrollToBottom').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });
});