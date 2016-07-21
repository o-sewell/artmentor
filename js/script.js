$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".info").offset().top},
        'slow');
});

$("#top").click(function() {
    $('html,body').animate({
        scrollTop: $(".nav").offset().top},
        'slow');
});
