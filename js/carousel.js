$(document).ready(function() {

    $(".owl-carousel").owlCarousel({

        loop: false,
        margin: 20,
        nav: true,
        responsive: {

            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }



        }


    })
})