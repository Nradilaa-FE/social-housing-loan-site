$(document).ready(function(){
    // Initialize Slick Carousel
    $('.news-carousel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // Burger Menu Toggle
    $('.burger').click(function(){
        $('.nav-links').toggleClass('nav-active');
    });

    // Lazy Loading
    $('img').each(function(){
        var img = $(this);
        img.attr('src', img.data('src'));
    });

    var configProfile = {
        "profile": {"screenName": 'TwitterDev'},
        "domId": 'twitter-feed',
        "maxTweets": 5,
        "enableLinks": true, 
        "showUser": true,
        "showTime": true,
        "showImages": true,
        "lang": 'en'
    };
    
    twitterFetcher.fetch(configProfile);
});