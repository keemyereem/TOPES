$(function(){
    
    AOS.init({
        // 핸들링 참고: https://github.com/michalsnik/aos
		once : true,
		throttleDelay : 99,
		duration: 1000,
        anchorPlacement: 'center-bobttom',
        startEvent: "load",

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
       this.fnImgPop();
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

            $(".header, .sitemap").css("left",0-$(this).scrollLeft());
        });

        $(document).on('click', '.top_sitemap', function() {
            $(this).toggleClass('on .col_b')
            $('.header').toggleClass('site');
            $('.sitemap').toggleClass('on');
        });
        
        if ($(window).width() > 768) {
            // pc버전 마우스 오버시
            $(document).on({
                mouseover: function () {
                    // let sitemapIdx = $(this).index();
                    $(this).siblings().find('h2 a').addClass('col_g');
                },
                mouseleave: function () {
                    $(this).siblings().find('h2 a').removeClass('col_g');
                }
            }, ".sitemap ul li"); 
        } else {
            // 모바일버전 터치시
            $(document).on('click', '.sitemap ul li h2', function() {
                $(this).find('a').toggleClass('on');
                $(this).siblings('.depth_box').toggleClass('on');
                if ($(this).find('a').hasClass('on')) {

                    $(this).parent().siblings().find('a').removeClass('on');
                    $(this).parent().siblings().find('.depth_box').removeClass('on');
                    $(this).parent().siblings().find('a').addClass('col_g');
                    $(this).find('a').removeClass('col_g');
                    
                } else if (!$('.sitemap ul li h2 a').hasClass('on')) {
                    $('.sitemap ul li h2 a').removeClass('col_g');
                }
            });
        }
        
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
            
            // 속도/ 신호위반/ 구간 단속 시스템 => 탭버튼 클릭 시, aos 초기화
            if ($('.tab_content0' + Tabs_cont).find('div, ul').hasClass('aos-init')) {
                AOS.refresh();
            }
        });
    },

    goTopEvent:function() {
        $(window).scroll(function() {
            // top button controll
            if ($(this).scrollTop() > 1000) {
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

    fnImgPop: function() {
        $(document).on('click', '.view .img_m', function() {
            var getUrl = $(this).attr('src');
            getUrl = getUrl.replace(".png","_view.png");

            var img = new Image();
            img.src = getUrl;
            
            let winX = (screen.width - img.width) / 2;
            let winY = (screen.height - img.height) / 2;
            window.open(getUrl, top=' + winY + ', left=' + winX ');
        });
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

            $(".header, .sitemap").css("left",0-$(this).scrollLeft());
        });

        $(document).on('click', '.top_sitemap', function() {
            $(this).toggleClass('on')
            $('.header').toggleClass('site');
            $('.sitemap').toggleClass('on'); 

            if ($('.sitemap').hasClass('on') && $(window).width() < 769) {
                
            } 
        })
        
        if ($(window).width() > 768) {
            // pc버전 마우스 오버시
            $(document).on({
                mouseover: function () {
                    // let sitemapIdx = $(this).index();
                    $(this).siblings().find('h2 a').addClass('col_g');
                },
                mouseleave: function () {
                    $(this).siblings().find('h2 a').removeClass('col_g');
                }
            }, ".sitemap ul li"); 
        } else {
            // 모바일버전 터치시
            $(document).on('click', '.sitemap ul li h2', function() {
                $(this).find('a').toggleClass('on');
                $(this).siblings('.depth_box').toggleClass('on');
                if ($(this).find('a').hasClass('on')) {

                    $(this).parent().siblings().find('a').removeClass('on');
                    $(this).parent().siblings().find('.depth_box').removeClass('on');
                    $(this).parent().siblings().find('a').addClass('col_g');
                    $(this).find('a').removeClass('col_g');

                } else if (!$('.sitemap ul li h2 a').hasClass('on')) {
                    $('.sitemap ul li h2 a').removeClass('col_g');
                }
            });
        }
        

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
                delay: 7000,
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
                
                if ($('.cont_main .section1 .tab_swiper0' + index).length) {
                    setTimeout(function() {
                        s1Swiper.slideTo(0, 0);
                    }, 500);
                    
                }
                
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
            var s3Top = $('.cont_main section:last-child').offset().top - $(window).outerHeight() + Number(266);
            var pos = $('.footer').outerHeight() + Number(400);

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
            slidesPerGroup : 5,
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
                spaceBetween: 15,
                slidesPerView : 2,
                slidesPerGroup : 1,
                },

            }, 
        });
    },

    history: function() {
        
        // 연혁 인터랙션
        $(document).ready(function () {
            var section = $('._historySection');
            var sectionOn = $('._historySection.on');
            let sectionLength = section.length;
            
            // 연도와 내용 높이값 맞추기
            section.find('.desc-info').each(function (idx) {
                let sectionHeight = section.eq(idx).find('.desc-info').height();
                section.eq(idx).find('.year-info').css('height', sectionHeight / 10 + 'rem')
            })

            $(window).on('scroll resize', function (){
                var currentPosition = $(window).scrollTop();
                var scrollEnd = $(document).height() - $(window).height();

                for (var i = 0; i < sectionLength; i++) {
                     setHistoryScroll(section.eq(i));
                }

                // 반응형 연혁 하단 여백 생성
                if($(window).width() > 1920){
                    section.css('margin-bottom','350px');
                } else if ($(window).width() < 768) {
                    section.css('margin-bottom','200px');
                } else {
                    section.css('margin-bottom','0');
                }

                // 연혁 연도 마지막 active일 때, 내용 마지막 active 또는 스크롤 맨 끝 도달 시
                if ($('.tab_contents.on .year-info').find('li:last-child').hasClass('active') || $(window).scrollTop() >= scrollEnd) {
                    $('.tab_contents.on .year-info').find('li:last-child').addClass('active');
                    $('.tab_contents.on .year-info').find('li:not(:last-child)').removeClass('active');
                    $('.tab_contents.on .desc-info').find('ul:last-child').addClass('active');
                    $('.tab_contents.on .desc-info').find('ul:not(:last-child)').removeClass('active');
                }

                
            })
        
            function setHistoryScroll($information) {
                var sectionOffset = $information.find('.desc-info ul').eq(0).offset().top;
                var size = $information.find('.year-info li').length;
                let gap = 20; 
                let gapYear = 69;
                let currentPosition = $(window).scrollTop() + 175;
                let getFixedMargin = 18;
                let lastUl = $information.find('.desc-info ul').last(); // 연혁 마지막 내용 위치값
                let lastBottom = lastUl.offset().top + lastUl.height(); // 연혁 마지막 내용 끝 지점

                $information.find('.year-info li').each(function (index) {
                    // 반응형 변수값 교체
                    if ($(window).width() < 768) {
                        gapYear = 50;
                        currentPosition = $(window).scrollTop() + 110;
                        getFixedMargin = 12; 
                    }

                    if (currentPosition < sectionOffset - gap) {
                        //섹션 이전 화면에서는 absolute상태
                        $information.find('.year-info').css({'top' : 'auto', 'position' : 'absolute', 'margin-top': '0'});
                        $information.find('.year-info ul').css({'position': 'relative', 'margin-top': '0'});

                        // 반응형 태블릿 연도 좌우 고정풀기
                        if($(window).width()<=1400 && $(window).width()>767){
                            $(window).scroll(function(){
                                $(".year-info").css("left",0 - $(this).scrollLeft());
                            });
                            
                        }else{
                            $(window).scroll(function(){
                                $(".year-info").css("left","initial");
                            });
                        };
                        
                    } else if ($information.hasClass('on') && currentPosition > lastBottom && $(window).height() < 851) {
                        // 연혁 내용 마지막 위치값 이상 넘어갈 경우 연도 고정
                        $information.find('.year-info').css({'top' : 'auto', 'bottom': '0', 'position' : 'absolute', 'margin-top': '0'});
                        $information.find('.year-info ul').css({'position': 'absolute', 'bottom': '5rem'});
                        $('.tab_contents.on .year-info').find('li:last-child').addClass('active');
                        $('.tab_contents.on .year-info').find('li:not(:last-child)').removeClass('active');

                    } else {
                        //섹션 안으로 들어오면 fixed 상태
                        if (size !== index + 1) {
                            if (currentPosition > $information.find('.desc-info ul').eq(index).offset().top - gap && currentPosition < $information.find('.desc-info ul').eq(index + 1).offset().top - gap) {
                                $information.find('.year-info').css({'top': '0', 'bottom': 'auto', 'position': 'fixed', 'margin-top': '' + getFixedMargin + 'rem'});
                                $information.find('.year-info ul').css({'margin-top': '-' + (gapYear * index) + 'px', 'position': 'relative', 'bottom': 'unset'});
                                $information.find('.year-info li').eq(index).addClass('active').siblings().removeClass('active');
                                $information.find('.desc-info ul').eq(index).addClass('active').siblings().removeClass('active');
                            }
                            
                        } else {
                            if (currentPosition > $information.find('.desc-info ul').eq(index).offset().top) {
                                // 연혁 내용 마지막 위치값 안으로 진입할 경우 연도 fixed
                                if (currentPosition < lastBottom) {
                                    $information.find('.year-info').css({'top': '0', 'bottom': 'auto', 'position': 'fixed', 'margin-top': '' + getFixedMargin + 'rem'});
                                    $information.find('.year-info ul').css({'margin-top': '-' + (gapYear * index) + 'px', 'position': 'relative', 'bottom': 'unset'});
                                }
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////                                                         **영문**                                                                   ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var EnCommon = {
    init:function(){
        this.observeResizing();
        this.sitemap();
    },
    observeResizing: function() {
        var delta = 300;
        var timer = null;
        var windowWidth = $(window).width();

        $('.en.container').prepend("<div class='resizeAlert'><span>A size change has been detected. &nbsp;It will refresh after a while.</span></div>");
        
        $(window).on('resize', function() {
            if(windowWidth != $(window).width()) {
                clearTimeout(timer);
                var timer = setTimeout(resizeDone, delta);
            }
        });

        function resizeDone() {
            $('.resizeAlert').css('top', '0');

            setTimeout(function () {
                location.reload();
            }, 1000);
        };
    },
    sitemap: function(){
        $(document).on('click', '.sitemap_wrap_en li .depth_box a', function() {
            $('.sitemap, .top_sitemap').removeClass('on');   
            $('.header').removeClass('site');


            var str = $(this).attr('href').split('#')[1];
            if ($('#' + str).length) {
                $('html, body').stop().animate({scrollTop: $('#' + str).offset().top}, 500);
                
            }


        });
        

    },

}

var EnPage = {
    init:function(){
        this.solutionTab();
        this.TabScrollfnc();
    },



    solutionTab: function() {
        var headerHeight = $('.header').outerHeight();
        var sub_visual_menu = $('.sub_visual_menu ul li').outerHeight();

        if ($(window).width() > 768) {
            // pc일 때
            $(".sub_visual_menu .mobile").remove();
            $('.sub_visual_menu li').on('click', function() {
                idx = $(this).index() + 1;
                if (idx > 0) {
                    $('html, body').stop().animate({scrollTop: $('#solution0' + idx).offset().top - (headerHeight + sub_visual_menu)}, 500);
                }
            });
        
        } else {
            // mobile일 때
            $(".sub_visual_menu .on").attr('class', 'on');
            $('.sub_visual_menu li:not(:first-child)').on('click', function() {
                idx = $(this).index();
                $('.sub_visual_menu ul').removeClass('on');
                $('html, body').stop().animate({scrollTop: $('#solution0' + idx).offset().top - (headerHeight + sub_visual_menu + 30)}, 500);
            });
            
        }
        
        //스크롤시 sub_visual_menu 고정
        $(window).scroll(function() {
            var sub_visual  = $('.sub_visual ').outerHeight();
            var sub_visual_menu = $('.sub_visual_menu ul li').outerHeight();
            var menuTop = sub_visual - sub_visual_menu;
            var menuTop_m = sub_visual - sub_visual_menu - Number(35);

            
            var windowTop = $(this).scrollTop();
            
            if($(window).width() > 768 ) {
                $('.header').not('.site').css('position','absolute');
                $('.header').removeClass('fixed');
                if(windowTop >= menuTop) {
                    $('.sub_visual_menu').addClass('fixed');
                } else {
                    $('.sub_visual_menu').removeClass('fixed');
                }
            } else {
                windowTop = windowTop + $('.header_en .header_wrap').outerHeight();
                txt = $('.sub_visual_menu li.mobile').text();
                $(".sub_visual_menu ul .on a").text(txt);

                if(windowTop >= menuTop_m) {
                    $('.sub_visual_menu').addClass('fixed');
                } else {
                    $('.sub_visual_menu').removeClass('fixed');
                }

                // mobile 메뉴 네비게이터 open 상태에서 스크롤 또는 터치로 움직일 경우
                $(document).on('mousewheel touchmove',function(e){
                    var wheel = e.originalEvent.wheelDelta;
                    if(wheel !== 0){
                        $('.sub_visual_menu ul').removeClass('on');
                    } 
                });

                $('#topButton').on('click', function() { 
                    $('.sub_visual_menu ul').removeClass('on'); 
                });
            }

        });
        
    },

    TabScrollfnc: function() {

        // Anchor Sub Nav  - Sticky Header
        $(function() {
            var anchorLink = $('.sub_visual_menu li')
            // console.log(anchorLink.outerHeight());
        
            $(window).on('load scroll', function() {
                var windscroll = $(window).scrollTop() + 30;

                if (windscroll >= 1) {
                    
                    $('.sol_contents .inner').each(function(i) {
                        if ($(this).position().top <= windscroll) {

                            if ($(window).width() > 768) {
                                $('.sub_visual_menu li.on').removeClass('on');
                                anchorLink.eq(i).addClass('on');
                            } else {
                                anchorLink = $('.sub_visual_menu li:not(.on)');
                                windscroll = windscroll + 25;
                                $('.sub_visual_menu li.mobile').removeClass('mobile');
                                anchorLink.eq(i).addClass('mobile');
                                txt = $('.sub_visual_menu li.mobile').text();
                                $(".sub_visual_menu ul .on a").text(txt);
                            }
                        }
                    });


                }
                
            }).scroll();
        });

    },

};