let swap = true;
$(window).scroll(function() {
    function from_top() {
        let hT = $('.skills').offset().top,
            hH = $('.skills').outerHeight() - 500,
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > hT+hH-wH) {
            setTimeout(()=> swap = false,100)
            return swap;
        }
    }
    if (from_top() && swap) {
        (function($) {
            $('.second.circle').circleProgress({
                value: 0.906,
                size: 160,
                thickness: 13,
                fill: "#30bae7",
                startAngle: 11,
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(90 * progress) + '<span>%</span>');
            });
            $('.second1.circle').circleProgress({
                value: 0.75,
                size: 160,
                thickness: 13,
                fill: "#d74680",
                startAngle: 11,
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(75 * progress) + '<span>%</span>');
            });
            $('.second2.circle').circleProgress({
                value: 0.682,
                size: 160,
                thickness: 13,
                fill: "#15c7a8",
                startAngle: 11,
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(70 * progress) + '<span>%</span>');
            });
            $('.second3.circle').circleProgress({
                value: 0.834,
                size: 160,
                thickness: 13,
                fill: "#eb7d4b",
                startAngle: 11,
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(85 * progress) + '<span>%</span>');
            });
        })(jQuery);
    }
});