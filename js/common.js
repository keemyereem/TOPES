$(function(){
    AOS.init({
		once : true,
		throttleDelay : 99,
		duration: 1000,
        anchorPlacement: 'center-bottom'
	});
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////                                                         **공통**                                                                   ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var commonEvent = {
    init:function(){
       this.headerEvent();
       this.menu();
       this.goTopEvent();
       this.bgAni();
       this.tabFunction();
    }, 

    headerEvent:function(){
        // 번역페이지 버튼 온/오프
        $(document).on('click', '.lang_choice li', function(){
            $('.lang_choice li').removeClass('on');
            $(this).addClass('on');  
        });

        $(window).on('scroll',function(){
            const st = $(window).scrollTop();
            if (st>=100){
                $('.header').addClass('fixed'); 
            }else{
                $('.header').removeClass('fixed');
            };

            $(".header").css("left",0-$(this).scrollLeft());
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

    tabFunction: function(){
        var Tabs = $('.tabs li');
        Tabs.on("click", function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');
            
            var Tabs_cont = Tabs.index(this)+1;
            $('.tab_contents').removeClass('on');
            $('.tab_content0' + Tabs_cont).addClass('on');
        });
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
            }, 100)
        })

    },
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////                                                         **메인**                                                                   ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var mainEvent = {
    init:function(){
       this.headerEvent();
       this.mainVisual();
       this.mainS1();
       this.s2Tab();
       this.floating();
    },
    headerEvent:function(){
        // 번역페이지 버튼 온/오프
        $(document).on('click', '.lang_choice li', function(){
            $('.lang_choice li').removeClass('on');
            $(this).addClass('on');  
        });

        $(window).on('scroll',function(){
            const st = $(window).scrollTop();

            if (st>=100){
                $('.header').addClass('fixed'); 
            }else{
                $('.header').removeClass('fixed'); 
            }

            $(".header").css("left",0-$(this).scrollLeft());
        });

    },

    mainVisual: function(){
        var mainSwiper = new Swiper('.main_visual', {
            observer: true,
            observeParents: true,
            slidesPerView : 1,
            speed: 500,
            loop: true,
            loopedSlides: 4,
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
        $(".cont_main .swiper-container").each(function(index,){
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
                watchOverflow: false, 
    
                breakpoints: {
                    768: {
                    spaceBetween: 20,
                    },
    
                }, 
            });
    
            var Tabs = $('.cont_main .section1 .s1_tab li');
            Tabs.on("click", function() {
                $(this).addClass('on');
                $(this).siblings().removeClass('on');
                var Tabs_cont = Tabs.index(this)+1;
    
                $('.cont_main .section1 .tab_contents').removeClass('on');
                $('.cont_main .section1 .tab_content0' + Tabs_cont).addClass('on');
                
                setTimeout(function(){
                    s1Swiper.slideTo(0, 0);
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////                                                         회사소개                                                                   ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var companyEvent={
    init:function(){
        this.featuresSlide();
        this.history();
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

            on: {
                slideChangeTransitionStart: function() {
                    var wrap_width = $('.swiper-pagination_wrap').width();
                    if(this.activeIndex % 5 == 0) {
                        $('.patent_swiper .swiper-pagination').css('left', '-' + (wrap_width) + 'px')
                    }
                    
                }
            }
        });

        
    },

    history: function() {

        // 연혁 탭버튼 누르면 슬라이드 이동 스크립트 -> html 소스 하단에 위치
        // function fnMove(seq){
        //     var id = $('#'+ seq);
        //     var offset = id.offset();
        //     $('html, body').animate({scrollTop : offset.top - 169}, 400);
        // }
        
        // 연혁 인터랙션
        $(document).ready(function () {
            var section = $('._historySection');
            var sectionLength = section.length;
            
            // 연도와 내용 높이값 맞추기
            section.find('.desc-info').each(function (idx) {
                var sectionHeight = section.eq(idx).find('.desc-info').height();
                section.eq(idx).find('.year-info').css('height', sectionHeight / 10 + 'rem')
            })

            $(window).on('scroll resize', function (){
                var currentPosition = $(window).scrollTop();

                for (var i = 0; i < sectionLength; i++) {
                     setHistoryScroll(section.eq(i));
                }
        
                if($(window).scrollTop() == $(document).height() - $(window).height()) {
                    $('.tab_contents .year-info').find('li').removeClass('active');
                    $('.tab_contents .year-info').find('li:last-child').addClass('active');
                    $('.tab_contents .desc-info').find('ul').removeClass('active');
                    $('.tab_contents .desc-info').find('ul:last-child').addClass('active');
                }
                else {
                    $('.tab_contents:last-child .year-info').find('li:last-child').removeClass('active')

                    $('.tabs li').on("click", function() {
                        var Tabs_cont = $('.tabs li').index(this)+1;
                        $('.tab_contents .year-info').find('li').removeClass('active');
                        $('.tab_contents .desc-info').find('ul').removeClass('active');
                        $('.tab_content0' + Tabs_cont).find('li:first-child').addClass('active');
                        $('.tab_content0' + Tabs_cont).find('ul:first-child').addClass('active');
                    });
                }
            })
        
            function setHistoryScroll($information) {
                var gap = 20;/*50*/
                var gapYear = 69;
                var currentPosition = $(window).scrollTop() + 180; /*+95 X*/
                var sectionOffset = $information.find('.desc-info ul').eq(0).offset().top;
                // var scrollStart = currentPosition - sectionOffset + 60;
                var size = $information.find('.year-info li').length;
                
                $information.find('.year-info li').each(function (index) {
                    if (currentPosition < $information.find('.desc-info ul').eq(0).offset().top - gap) {
                        //섹션 이전 화면에서는 absolute상태
                        $information.find('.year-info').css({'top' : 'auto', 'position' : 'absolute', 'margin-top': '0'});
                        $information.find('.year-info ul').css({'margin-top': '0'});
                        
                        if($(window).width()<=1400 && $(window).width()>767){
                            $(window).scroll(function(){
                                $(".year-info").css("left",0-$(this).scrollLeft());
                            });
                            
                        }else{
                            $(window).scroll(function(){
                                $(".year-info").css("left","initial");
                            });
                        };

                        if($(window).width() > 1920){
                            $('.desc-info').css('padding-bottom','300px');
                        }else{
                            $('.desc-info').css('padding-bottom','0');
                        }
                        
                        
                    } else {
                        //섹션 안으로 들어오면 fixed 상태
                        if (size !== index + 1) {
                            if (currentPosition > $information.find('.desc-info ul').eq(index).offset().top - gap && currentPosition < $information.find('.desc-info ul').eq(index + 1).offset().top - gap) {
                                $information.find('.year-info').css({'top': '0', 'position': 'fixed', 'margin-top': '180px'});
                                $information.find('.year-info ul').css({'margin-top': '-' + (gapYear * index) + 'px'});
                                $information.find('.year-info li').eq(index).addClass('active').siblings().removeClass('active');
                                $information.find('.desc-info ul').eq(index).addClass('active').siblings().removeClass('active');
                            }
                        } else {
                            if (currentPosition > $information.find('.desc-info ul').eq(index).offset().top) {
                                // $information.find('.year-info').css({'top': scrollStart + gap - (gapYear * index)}, {'position': 'fixed'});
                                $information.find('.year-info').css({'top': '0', 'position': 'fixed', 'margin-top': '180px'});
                                $information.find('.year-info ul').css({'margin-top': '-' + (gapYear * index) + 'px'});
                                $information.find('.year-info li').eq(index).addClass('active').siblings().removeClass('active');
                            }
                        }
                    }
                })
            }
        })
    },

};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////                                                         고객지원                                                                   ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var supportEvent = {
    init:function(){
        this.faqToggle();
        this.iptEvent();
    },
    faqToggle: function(){
        $(".que").click(function() {
            $(this).next(".ans").stop().slideToggle(300);
            $(this).toggleClass('on').siblings().removeClass('on');
            $(this).next(".ans").siblings(".ans").slideUp(300);
         });
    },

    iptEvent:function(){
        //selectbox
        var selectType = $(".select_row>select");
        selectType.addClass("selectBox");
        selectChange(selectType);
        function selectChange(type) {
            type.change(function () {
                var select_name = $(this).children("option:selected").text();
                $(this).siblings("label").text(select_name);
            });
        };
        $('.estimate_contents .select_row').click(function(){
            $(this).toggleClass('on');
        });

    },
};

