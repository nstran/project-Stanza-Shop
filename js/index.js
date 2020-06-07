$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    dots: false,
    nav: true,
    navText: false,
    // ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]
    items: 4,
    responsive: {
        0: {
            items: 1,
        },

        480: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        }
    }
})