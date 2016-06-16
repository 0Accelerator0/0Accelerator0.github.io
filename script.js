
var main = function(){
    $('.dropdown-toggle').mousemove(function() {
        $('.dropdown-menu').show(300);
    });
    $('.dropdown-menu').mouseleave(function(){
        $('.dropdown-menu').hide(300);
    });
    $('.menu-other').mousemove(function() {
        $('.dropdown-menu').hide(300);
    });
    $('.intro').mousemove(function() {
        $('.dropdown-menu').hide(300);
    });
    
}



$(document).ready(main);