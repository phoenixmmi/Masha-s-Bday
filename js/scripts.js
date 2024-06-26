$(function () {
    $.scrollify({
        section: ".scrolls",
        easing: "easeOutExpo",
        scrollSpeed: 800,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function (index, sections) {
            $('.scrolls').removeClass('active');
            $('.pagination a').removeClass('active');
            current = $.scrollify.current();
            current.addClass('active');
            $('.pagination a').eq(index).addClass('active');
        }
    });

    $('.pagination a').on('click', function(e) {
        e.preventDefault();
        var index = $(this).parent().index();
        $.scrollify.move(index);
    });

    $('.pagination a').eq(0).addClass('active');

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('#cake').hover(function() {
        confetti({
            particleCount: 300,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: -0.1
            }
        });
    });
});
