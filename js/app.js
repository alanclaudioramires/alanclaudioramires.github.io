$(window).on('resize', function () {
    $('#ribbon').toggleClass('ribbon-text', $(window).width() > 768);
});

$(window).on('load', function () {
    $('#ribbon').toggleClass('ribbon-text', $(window).width() > 768);
});