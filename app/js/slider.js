// const { default: Swiper } = require("swiper");

$(function () {
    $('.page-top__slider').slick(
        {
            fade: true,
            dots: true,
            prevArrow: "<img src='../images/page-top/slide-arrow-right.svg' class='prevArrow'> ",
            nextArrow: "<img src='../images/page-top/slide-arrow.svg' class='nextArrow'>",
            responsive: [
              {
                  breakpoint: 1360,
                  settings: {
                    // autoplay: true,
                    autoplaySpeed: 2000,
                  }
              },
            ]
        }
    );
    $('.slider__left').slick(
      {
        fade:true,
        dots: true,
        prevArrow: "<img src='../images/page-catalog/arrow-slide.svg' class='prevArrowOne'>",
        nextArrow: "<img src='../images/page-catalog/arrow-slide.svg' class='nextArrowOne'>"

      }
    );
    $('.page-card__slider-min').slick(
      {
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<img src='../images/page-card/arrow.svg' class='prevArrowTwo'>",
        nextArrow: "<img src='../images/page-card/arrow.svg' class='nextArrowTwo'>",
        asNavFor: '.page-card__slider-big',
        
      }
    );
    $('.page-card__slider-big').slick(
      {
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor: '.page-card__slider-min',
        fade: true,
        arrows: false,
      }
    )
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup:1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination:{
      el: '.swiper-pagination',
      clickable:true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable:true,
    },
    Keyboard:{
      enabled: true,
      onlyInViewport: true,
    },
    watchOverflow: true,

    breakpoints: {
      320: {
        slidesPerView:1
      },
      480:{
        slidesPerView: 1.5
      },
      540:{
        slidesPerView: 2
      },
      670: {
        slidesPerView: 2.1,
      },
      768:{
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3,
      },
      1399: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      }
    }
  });
  const swiper2 = new Swiper('.swiper2', {
    

    slidesPerView: 4,
    slidesPerGroup:1,
    spaceBetween: 20,
    // Navigation arrows
   
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
 
    pagination:{
      el: '.swiper-pagination2',
      clickable:true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    Keyboard:{
      enabled: true,
      onlyInViewport: true,
    },
    watchOverflow: true,

    breakpoints: {
      320: {
        slidesPerView:1
      },
      480:{
        slidesPerView: 1.36
      },
      540:{
        slidesPerView: 1.65,
        spaceBetween: 10,
      },
      670: {
        slidesPerView: 1.98,
      },
      768:{
        slidesPerView: 2.15,
      },
      822:{
        slidesPerView: 2.4,
      },
      992: {
        slidesPerView: 2.9,
      },
      1200: {
        slidesPerView:3.5,
      },
      1400: {
        slidesPerView: 4,
      }
    }
  });
  const swiper3 = new Swiper('.swiper3', {

    slidesPerView: 4,
    slidesPerGroup:1,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    pagination:{
      el: '.swiper-pagination3',
      clickable:true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      320: {
        slidesPerView:1
      },
      480:{
        slidesPerView: 1.36
      },
      540:{
        slidesPerView: 1.65,
        spaceBetween: 10,
      },
      670: {
        slidesPerView: 1.98,
      },
      768:{
        slidesPerView: 2.15,
      },
      822:{
        slidesPerView: 2.4,
      },
      992: {
        slidesPerView: 2.9,
      },
      1200: {
        slidesPerView:3.5,
      },
      1400: {
        slidesPerView: 4,
      }
    }
  });
  const swiper4 = new Swiper('.swiper4', {
    // Navigation arrows
    initialSlide:1,
    setWrapperSize: true,
    // loop: true,
    slidesPerView: 6, 
    // loopedSlides: 6,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
    // pagination:{
    //   el: '.swiper-pagination3',
    //   clickable:true,
    // },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  
  });



