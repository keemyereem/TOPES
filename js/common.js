$(function(){

});

var mainEvent = {
    init:function(){
       this.mainVisual();
       this.s1Tab();
       this.s2Tab();
       this.floating();
    },

    mainVisual:function(){
        var mainSwiper = new Swiper('.main_visual', {
            observer: true,
            observeParents: true,
            slidesPerView : 1,
            speed: 500,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false, 
            },


            navigation: {
                nextEl: '.arrow.swiper-button-next',
                prevEl: '.arrow.swiper-button-prev',
            },
            watchOverflow: true, 
        });
    },

    s1Tab: function(){
        var Tabs = $('.cont_main .section1 .s1_tab li');
        Tabs.on("click", function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            
            var Tabs_cont = Tabs.index(this)+1;
            $('.cont_main .section1 .tab_contents').removeClass('on');
            $('.cont_main .section1 .tab_content0' + Tabs_cont).addClass('on');
        });
    },

    s2Tab: function(){
        var Tabs = $('.cont_main .section2 .s2_tab li');
        Tabs.on("click", function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            
            var Tabs_cont = Tabs.index(this)+1;
            $('.cont_main .section2 .tab_contents').removeClass('on');
            $('.cont_main .section2 .tab_content0' + Tabs_cont).addClass('on');
        });
    },

    floating:function() {
        $(window).scroll(function() {
            var s3Top = $('.cont_main .section3').offset().top - $(window).outerHeight() + Number(250);
            if($(this).scrollTop() > s3Top){
                $('.floating_area').addClass('on').css({'bottom': '50rem'});

            }else {
                $('.floating_area').removeClass('on').css({'bottom':'4rem'});
            }
        });

    },


};

