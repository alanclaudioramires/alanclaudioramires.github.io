$(window).on('resize', function () {
    $('#ribbon').toggleClass('ribbon-text', $(window).width() >= 768);
});