document.addEventListener('DOMContentLoaded', function () {
    // burger 
    let burger = document.querySelector('header .burger');
    let main_menu = document.querySelector('header .right');
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        main_menu.classList.toggle('active');
    });


    // images height 
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

    let slider_logos = document.querySelectorAll('.home_partners .wrap img');
    if (slider_logos) {
        for (let i = 0; i < slider_logos.length; i++) {
            setTimeout(function(){
                autoHeight(slider_logos[i], 0.855);
            },2500)
        }
    }


    // sliders 
    const testimonials = new Swiper('.home_testimonials .swiper-container', {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: '.home_testimonials .swiper-pagination',
        },
        navigation: {
            nextEl: '.home_testimonials .next_arrow',
            prevEl: '.home_testimonials .prev_arrow',
        },
        breakpoints: {

            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

    let logo_sliders = document.querySelectorAll('.home_partners .swiper-container');
    for(let i=0;i<logo_sliders.length;i++){
        let logo_slider=new Swiper(logo_sliders[i],{
            slidesPerView: 2,
            spaceBetween: 50,
            speed: 1200,
            loop:true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            pagination: {
                el: '.home_partners .swiper-pagination',
            },
            breakpoints: {

                576: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
    
                992: {
                    slidesPerView: 6,
                    spaceBetween: 40
                }
            }
        });
    }


    // acordeon 
    let acordeon_titles=document.querySelectorAll('.home_faq .wrap>h3');
    if(acordeon_titles){
        for(let i=0;i<acordeon_titles.length;i++){
            acordeon_titles[i].addEventListener('click',function(e){
                let wrap=this.parentElement;
                let content=this.parentElement.querySelector('.content');
                let height=content.querySelector('.text_editor').offsetHeight;
                wrap.classList.toggle('active');
                content.style.maxHeight=height + 'px';
                console.log(height);
            });
        }
    }
})