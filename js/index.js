// Slider
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    dots: false,
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
        },
    }
})


// Dropdown in Menu-mobile

$(document).ready(function() {
    $(".humberger-menu__mobile__menu .main-menu li:nth-child(2)").click(function() {
        $(".sub-menu").toggleClass("shop-menu-open");
        $(".fa-caret-right").toggleClass("rotale-icon");
    });
});


// Buger-Menu

$('.humberger, .humberger-menu__overlay').click(function() {
    $('.humberger-menu').toggleClass('show-humberger-menu');
    $('.humberger-menu__overlay').toggleClass('active');
    $('.humberger').toggleClass('opened');
    $('body').toggleClass('overflow');
});


// Nivo slider
$(window).load(function() {
    return $("#slider").nivoSlider({
        directionNav: false,
        controlNav: false,
        animSpeed: 1000,
        pauseTime: 3000,
    });
});


// Back to top

$('.scroll-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
});

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 200) {
        document.getElementById("back-to-top").style.opacity = "1";
    } else {
        document.getElementById("back-to-top").style.opacity = "0";
    }
    // if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    //     document.getElementById("header").style.background = "#fff";
    // } else {
    //     document.getElementById("header").style.background = "rgba(0, 0, 0, 0.6)";
    // }
}


// Show search
$('.nav-search .btn-orange').click(function() {
    $('.mini-search').toggleClass('show-search ');
});