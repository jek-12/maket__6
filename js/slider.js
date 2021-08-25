let swiper_f = new Swiper('.service_slider', {
    slidesPerView: 4,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,


        pagination: {
        el: '.swiper-pagination-0',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        740: {
            spaceBetween: 30,
            slidesPerView: 3,

        },
        1100: {
            spaceBetween: 80,
            slidesPerView: 4,
        }
    }

});

let swiper_s = new Swiper('.team_slider', {
    slidesPerView: 4,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        740: {
            spaceBetween: 30,
            slidesPerView: 3,

        },
        1100: {
            spaceBetween: 80,
            slidesPerView: 4,
        }
    }

});


let swiper_t = new Swiper('.skills-slider', {
    slidesPerView: 4,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,//false
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    zoom: {
        containerClass:"swiper-zoom-container",
        maxRatio: 3,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        740: {
            spaceBetween: 30,
            slidesPerView: 3,

        },
        1100: {
            spaceBetween: 80,
            slidesPerView: 4,
        }
    }

});

