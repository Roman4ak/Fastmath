document.addEventListener('DOMContentLoaded', function () {
    let burger = document.querySelector('header .burger');
    let main_menu = document.querySelector('header .right');
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        main_menu.classList.toggle('active');
    });



    function autoHeight(elem, val) {
        let height = elem.offsetWidth * val;
        elem.style.height = height + "px";
    }
    let logos = document.querySelectorAll('.home_logos .wrapper img');
    if (logos) {
        for (let i = 0; i < logos.length; i++) {
            autoHeight(logos[i], 1);
        }
    }

    const testimonials = new Swiper('.home_testimonials .swiper-container', {
        slidesPerView: 3,
        speed: 700,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.home_testimonials .next_arrow',
            prevEl: '.home_testimonials .prev_arrow',
        },

    });
    console.log('asdasd')
})