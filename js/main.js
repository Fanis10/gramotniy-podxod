function sliderMain() {
    var swiper = new Swiper(".experience .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".experience .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".experience .swiper-button-next",
            prevEl: ".experience .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}


function sliderMainTwo() {
    var swiper = new Swiper('.recommendation .swiper', {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: 'true',
        loop: 'true',
        navigation: {
            nextEl: ' .recommendation .swiper-button-next',
            prevEl: ' .recommendation .swiper-button-prev',
        },
        pagination: {
            el: ".recommendation .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 25,

            },

            992: {
                slidesPerView: 2,
                centeredSlides: false

            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 50,

            },

        }

    })
}


$(document).ready(function() {
    sliderMain()
    sliderMainTwo()

    // Menu
    let burger = document.querySelector('.header-mob__burger');
    let menu = document.querySelector('.header-dekstop');
    let body = document.querySelector('body')
    burger.addEventListener('click', function() {
        burger.classList.toggle('header-mob__burger--active');
        menu.classList.toggle('header-dekstop--active');
        body.classList.toggle('fixed-body');
    })

    // Up
    $(function() {
        $('.footer__up').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        })
    })

    // Accordion
    $('.answers__item-show').click(function() {
        $(this).toggleClass('answers__item-show--active');
        $(this).siblings('.answers__item-hidden').toggleClass('answers__item-hidden--active');
    })

    // $('.examples__btn').click(function() {
    //     $(this).toggleClass('examples__btn--active');
    //     $(this).siblings('.examples__item-hidden').toggleClass('examples__item-hidden--active');
    // })

})