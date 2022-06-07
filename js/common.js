$(function(){

});

var mainEvent = {
    init:function(){
       this.mainVisual();417
    },

    mainVisual:function(){
        var mainSwiper = new Swiper('.main_visual', {
            observer: true,
            observeParents: true,
            slidesPerView : 1,
            speed: 1000,
            
            navigation: {
                nextEl: '.arrow.swiper-button-next',
                prevEl: '.arrow.swiper-button-prev',
            },
            watchOverflow: true,

            breakpoints: {

                768: {
                slidesPerView: 1,  //브라우저가 768보다 클 때
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 2,  //브라우저가 1024보다 클 때
                spaceBetween: 70,
                },
            },   
        });
    },

};

