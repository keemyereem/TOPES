$(function(){
});

var commonEvent = {
    init:function(){
       this.headerEvent();
       this.menu();
       this.goTopEvent();
       this.bgAni();
    },

    headerEvent:function(){
        // 번역페이지 버튼 온/오프
        $(document).on('click', '.lang_choice li', function(){
            $('.lang_choice li').removeClass('on');
            $(this).addClass('on');  
        });
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
    
    bgAni: function() {
        $(document).ready(function() {
            setTimeout(function() {
                $('.sub_visual').addClass('ani');
            }, 200)
        })

    },
}

var mainEvent = {
    init:function(){
       this.mainVisual();
       this.mainS1();
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

    mainS1: function(){
        var Tabs = $('.cont_main .section1 .s1_tab li');

        $(".swiper-container").each(function(index,){
            var s1Swiper = new Swiper('.cont_main .section1 .tab_swiper0' + index, {
                observer: true,
                observeParents: true,
                slidesPerView : 2,
                speed: 500,
                spaceBetween: 40,
                watchActiveIndex: true,
    
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
    
            
            Tabs.on("click", function() {
                $(this).addClass('on');
                $(this).siblings().removeClass('on');
                var Tabs_cont = Tabs.index(this)+1;
    
                $('.cont_main .section1 .tab_contents').hide().removeClass('on');
                $('.cont_main .section1 .tab_content0' + Tabs_cont).addClass('on').fadeIn();
                
                setTimeout(function(){
                    s1Swiper.slideTo(0);
                },500);
                
            });
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
            var s3Top = $('.cont_main .section3').offset().top - $(window).outerHeight() + Number(266);
            var pos = $('.footer').outerHeight() + Number(500);

            if($(this).scrollTop() > s3Top){
                $('.floating_area').addClass('on').css({'bottom': pos});

            }else {
                $('.floating_area').removeClass('on').css({'bottom':'4rem'});
            }
        });

        $(document).on('click', '#main_top', function() {
            $('html, body').animate({scrollTop:0}, '300');
        });

    },


};

var companyEvent={
    init:function(){
        this.featuresSlide();
        this.featuresTab();
        this.locationTab();
    },

    /* 토페스 특장점 */
    featuresSlide: function(){
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
                clickable: true,
            },
            watchOverflow: true, 

            breakpoints: {
                768: {
                spaceBetween: 20,
                },

            }, 
        });
    },

    featuresTab: function(){
        var Tabs = $('.features_contents .section2 .s2_tab li');
        Tabs.on("click", function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            
            var Tabs_cont = Tabs.index(this)+1;
            $('.features_contents .section2 .tab_contents').removeClass('on');
            $('.features_contents .section2 .tab_content0' + Tabs_cont).addClass('on');
        });
    },

    /* 오시는 길 */
    locationTab: function(){
        var Tabs = $('.cont_company .location_contents .location_tab li');
        Tabs.on("click", function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            
            var Tabs_cont = Tabs.index(this)+1;
            $('.cont_company .location_contents .tab_contents').removeClass('on');
            $('.cont_company .location_contents .tab_content0' + Tabs_cont).addClass('on');
        });
    },

};

