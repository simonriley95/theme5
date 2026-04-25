// Home Page 1 


$(document).ready(function () {
    var owl = $('.testimonials-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })
})


$(document).ready(function () {
    var owl = $('.recent-projects-con .owl-carousel');

    function initializeCarousel(marginValue) {
        owl.owlCarousel('destroy'); // Destroy existing instance if any
        owl.owlCarousel({
            margin: marginValue,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1441: {
                    items: 5
                }
            }
        });
    }

    function adjustMargin() {
        if (window.innerWidth <= 1440) {
            initializeCarousel(20); // Set margin to 20 for max-width 1440px
        } else {
            initializeCarousel(30); // Default margin for larger screens
        }
    }

    // Initial call to set the correct margin
    adjustMargin();

    // Adjust carousel on window resize
    $(window).on('resize', function () {
        adjustMargin();
    });
});