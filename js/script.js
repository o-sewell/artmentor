$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".info").offset().top},
        'slow');
});
