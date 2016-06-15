var main=function(){
    $('.dropdown-toggle').mousemove(function() {
        $('.dropdown-menu').show(300);
    });
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle(300);
    });
    $('.dropdown-menu').mouseleave(function(){
        $('.dropdown-menu').hide(300);
    });
    $('.menu-other').mousemove(function() {
        $('.dropdown-menu').hide(300);
    });
    $('.slider').mousemove(function() {
        $('.dropdown-menu').hide(300);
    });
    
    
}

$(document).ready(main);
