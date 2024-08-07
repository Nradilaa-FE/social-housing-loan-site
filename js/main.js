$(document).ready(function(){

    // Burger Menu Toggle
    $('.burger').click(function(){
        $('.nav-links').toggleClass('nav-active');
    });

    // Lazy Loading
    $('img').each(function(){
        var img = $(this);
        img.attr('src', img.data('src'));
    });
});