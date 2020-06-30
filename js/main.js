$(document).ready(function () {
    
    const project = $('.project .col-md-3');
    $('.project .col-md-3').mouseover(function() {

        $(this).find('h3').fadeIn(100);
        $(this).find('.link').fadeIn(100);

    });

    $('.project .col-md-3').mouseleave(function () { 

        $(this).find('h3').fadeOut(10);
        $(this).find('.link').fadeOut(10);
        
    });

});