
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
    
    carousel();
}

function carousel() {
    slidenext();
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

var slidenext = function(){
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
};

var slideprev = function(){
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
};



$(document).ready(main);