$(function(){

});

var commonEvent = {
    init:function(){
       this.menu();
       this.goTopEvent();
    },

    menu: function(){
        var response = $(window).width();
        if (response < 789) {
            $('.sub_visual_menu ul li.on').on('click', function() {
                $(this).parent().toggleClass('on');
            });
        }    
    },

    goTopEvent:function() {
        $(window).scroll(function() {
            // top button controll
            if ($(this).scrollTop() > 500) {
                $('#topButton').fadeIn();
            } else {
                $('#topButton').fadeOut();
            }
            var footerTop = $('.footer').offset().top - $(window).outerHeight();
            var pos = $('.footer').outerHeight() + Number(80);
            var pos_m = $('.footer').outerHeight() + Number(33);
            
            if($(this).scrollTop() > footerTop){
                if($(window).width()>767){
                    $('#topButton').addClass('on').css({'bottom':pos});
                }else {
                    $('#topButton').addClass('on').css({'bottom':pos_m});
                }

            }else {
                if($(window).width()>767){
                    $('#topButton').removeClass('on').css({'bottom':'8rem'});
                }else {
                    $('#topButton').removeClass('on').css({'bottom':'3.3rem'});
                }
                
            }
        });

        $(document).on('click', '#topButton', function() {
            $('html, body').animate({scrollTop:0}, '300');
        });
    },
}

var mainEvent = {
    init:function(){
       this.mainVisual();
       this.s1Tab();
       this.s1Slide();
       this.s2Tab();
       this.floating();
    },

    mainVisual: function(){
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
                nextEl: '.main_visual .arrow.swiper-button-next',
                prevEl: '.main_visual .arrow.swiper-button-prev',
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

    s1Slide: function(){
        var s1Swiper = new Swiper('.cont_main .section1 .tab_swiper', {
            observer: true,
            observeParents: true,
            slidesPerView : 2,
            speed: 500,
            spaceBetween: 40,

            navigation: {
                nextEl: '.cont_main .section1 .arrow.swiper-button-next',
                prevEl: '.cont_main .section1 .arrow.swiper-button-prev',
            },

            pagination: {
                el: ".cont_main .section1 .swiper-pagination",
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
                formatFractionTotal: function (number) {
                    return ('0' + number).slice(-2);
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                            '/' +
                           '<span class="' + totalClass + '"></span>';
                }
            },
            watchOverflow: true, 

            breakpoints: {
                768: {
                spaceBetween: 20,
                },

            }, 
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

var companyEvent={
    init:function(){
        this.s1Slide();
    },

    s1Slide: function(){
        var patentSwiper = new Swiper('.features_contents .patent_swiper', {
            observer: true,
            observeParents: true,
            slidesPerView : 5,
            speed: 500,
            spaceBetween: 30,

            navigation: {
                nextEl: '.patent_swiper .arrow.swiper-button-next',
                prevEl: '.patent_swiper .arrow.swiper-button-prev',
            },

            pagination: {
                el: ".patent_swiper .swiper-pagination",
                type: 'fraction',

            },
            watchOverflow: true, 

            breakpoints: {
                768: {
                spaceBetween: 20,
                },

            }, 
        });
    },

};

