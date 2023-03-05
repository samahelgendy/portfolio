$('.counter-count').each(function () {
    $(this).prop('fact', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 300,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});