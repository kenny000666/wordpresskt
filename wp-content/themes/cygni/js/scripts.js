(function ($) {
    "use strict";

    ///////////////////////////////////////////// Site Navigation  /////////////////////////////////////////////



    $('.menu > li > a').each(function () {
        var dataHover = $(this).text();

        var attrHref = $(this).attr('href');

        if (attrHref === '#') {

            $(this).addClass('no-trans')
        }

        if ($('.site-navigation').hasClass('classic')) {

            $(this).wrapInner('<span data-hover="' + dataHover + '"></span>')

        } else {
            $(this).attr('data-hover', dataHover);
        }

    });

    $('.current-menu-item').addClass('menu-item-hover');

    $('.menu > li').on('mouseenter', function () {

        $('.menu > li').removeClass('menu-item-hover')
        $(this).addClass('menu-item-hover');

    });

    $('.menu > li').on('mouseleave', function () {

        $('.menu > li').removeClass('menu-item-hover')
        $('.menu > li.current-menu-item').addClass('menu-item-hover');

    });

    $('.menu > li').on('click', function () {
        $('.menu > li').removeClass('menu-item-hover')
        $('.menu li').removeClass('current-menu-item')
        $(this).addClass('menu-item-hover');
        $(this).addClass('current-menu-item');

    });

    var scA = $('.scrolling-button a').marquee({
        duplicated: true,
        delayBeforeStart: 0,
    });

    scA.marquee('pause');

    //// Menu Animations End


    if (!$('.site-navigation').hasClass('classic')) {

        $('.sub-menu > .menu-item.has-children').on('mouseenter', function () {

            $('.sub-menu .sub-menu').removeClass('sub-sub-in')

            var subsubmenu = $(this).children('.sub-menu')

            subsubmenu.addClass('sub-sub-in')


        });

        $('.menu > .menu-item.has-children > .sub-menu').on('mouseleave', function () {
            $('.sub-menu .sub-menu').removeClass('sub-sub-in');
        });

    }
    /* Sub-Menus */

    /* Menu Toggle Hamburger */


    $('.menu-toggle').on('click', function () {

        var clicks = $(this).data('clicks');
        if (clicks) {


            setTimeout(function () {
                $('.site-header').removeClass('dark-nav-active light-nav-active');
                $('.site-navigation').removeClass('nav-open')

            }, 380);

            $('.sub-toggle').removeClass('st-in')

            $('.sub-menu').removeClass('sub-menu-in');
            $('.sub-toggle').removeClass('st-active');
            $('.sub-menu .sub-menu').removeClass('sub-sub-in')

            $('.menu-wrapper').css('visibility', 'hidden');

            scA.marquee('pause');

            $(this).removeClass('is-active');

            $('.menu-ov').removeClass('menu-ov-in');

            $('.menu > li > a').each(function (i, element) {
                $(element).delay(i * 20).queue(function (next) {
                    $(this).removeClass('menu-item-comes');
                    next();
                });
            });

            $('.mww-1, .mww-2, .mww-3').removeClass('mww-in');

            $('.widget-socials li').removeClass('so-li-in');
            $('body').css('overflow', 'visible')

        } else {

            if ($(window).outerWidth() < 850) {
                $('body').css('overflow', 'hidden')
            }

            $('.site-navigation').addClass('nav-open')

            $('.menu-wrapper').css('visibility', 'visible');

            $(this).addClass('is-active');

            $('.menu-ov').addClass('menu-ov-in');

            scA.marquee('resume');


            if ($('.site-navigation').hasClass('light')) {
                setTimeout(function () {
                    $('.site-header').addClass('light-nav-active')
                }, 150);

            } else {

                setTimeout(function () {

                    $('.site-header').addClass('dark-nav-active')
                }, 150);


            }


            setTimeout(function () {

                $('.menu > li > a').each(function (i, element) {
                    $(element).delay(i * 30).queue(function (next) {
                        $(this).addClass('menu-item-comes');
                        next();
                    });
                });

            }, 200);

            setTimeout(function () {

                $('.mww-1, .mww-2, .mww-3').addClass('mww-in');

                $('.widget-socials li').each(function (i, element) {
                    $(element).delay(i * 40).queue(function (next) {
                        $(this).addClass('so-li-in');
                        next();
                    });
                });



            }, 300);

            setTimeout(function () {
                $('.sub-toggle').addClass('st-in')
            }, 500);

        }
        $(this).data("clicks", !clicks);

    });
    /* Menu Toggle Hamburger */

    if (!$('.site-navigation').hasClass('nav_open')) {
        $('.site-logo a').on('click', function () {


            setTimeout(function () {
                $('.sub-menu').removeClass('sub-menu-in');
                //  $('.sub-menu .sub-menu').removeClass('sub-sub-in')
                $('.sub-toggle').removeClass('st-active');
                $('.sub-toggle').removeClass('st-in')
            }, 5);


            $('.menu-wrapper').css('visibility', 'hidden');

            scA.marquee('pause');

            $('.menu > li > a').each(function (i, element) {
                $(element).delay(i * 20).queue(function (next) {
                    $(this).removeClass('menu-item-comes');
                    next();
                });
            });

            setTimeout(function () {
                $('.site-navigation').removeClass('nav-open');

                $('body').css('overflow', 'visible')

            }, 300)

            $('.mww-1, .mww-2, .mww-3').removeClass('mww-in');

            $('.widget-socials li').removeClass('so-li-in');


            $('.menu-toggle').data('clicks', false);


        })
    }



    $('.menu-item a').not('.no-trans').on('click', function () {

        setTimeout(function () {
            $('.sub-menu').removeClass('sub-menu-in');
            //  $('.sub-menu .sub-menu').removeClass('sub-sub-in')
            $('.sub-toggle').removeClass('st-active');
            $('.sub-toggle').removeClass('st-in')
        }, 5);


        $('.menu-wrapper').css('visibility', 'hidden');

        scA.marquee('pause');

        $('.menu > li > a').each(function (i, element) {
            $(element).delay(i * 20).queue(function (next) {
                $(this).removeClass('menu-item-comes');
                next();
            });
        });

        setTimeout(function () {
            $('.site-navigation').removeClass('nav-open');

            $('body').css('overflow', 'visible')

        }, 300)

        $('.mww-1, .mww-2, .mww-3').removeClass('mww-in');

        $('.widget-socials li').removeClass('so-li-in');


        $('.menu-toggle').data('clicks', false);

    })

    if ($(window).outerWidth() < 850) {
        $('.site-navigation').removeClass('classic');
        $('.site-navigation').addClass('full_screen');


        var nPosts = $('.posts-navigation ul li:last-child a');

        nPosts.html('»');

        var allLi = $('.posts-navigation ul li');

        if (allLi.length > 4) {
            var pPosts = $('.posts-navigation ul li:first-child a');
            pPosts.html('«');
        }

    }

    $('.site-navigation.full_screen .menu > li.menu-item-has-children').each(function () {

        $(this).prepend('<i class="sub-toggle  icon-plus"><i>');


    })

    $('.sub-toggle').on('click', function () {

        $(this).toggleClass('st-active')

        var parentLi = $(this).parent('li');
        var openSub = parentLi.children('.sub-menu');



        openSub.toggleClass('sub-menu-in')


    })


    ///////////////////////////////////////////// Site Navigation  /////////////////////////////////////////////

    function showcaseOpening() {


        /* Project Page Opening */
        if ($('.single-project').length) {

            var psp = $('.single-project');

            $('.pi-ov').addClass('pi-ov-in')

        }
        /* Project Page Opening */

        /* Blog Posts Page Opening */
        if ($('.pe-blog-posts').length) {

            $('.cygni-post').addClass('post-in')
            $('.j-back').addClass('anim-in')

            setTimeout(function () {

                $('.pe-post').each(function (i, element) {
                    $(element).delay(i * 200).queue(function (next) {
                        $(this).addClass('anim-in');
                        next();
                    });
                });
            }, 500)


            setTimeout(function () {
                $('.site-branding img ').addClass('logo-in');

            }, 800)

            setTimeout(function () {
                $('.toggle-line').addClass('toggle-line-in');

            }, 1300)

        }
        /* Blog Posts Page Opening */

        /* Horizontal Opening */
        if ($('.cygni-horizontal').length) {

            setTimeout(function () {

                $('.cygni-horizontal-titles .title span').each(function (i, element) {
                    $(element).delay(i * 175).queue(function (next) {
                        $(this).addClass('anim-in');
                        next();
                    });
                });

                $('.cygni-horizontal-images').addClass('init')


            }, 250)

            setTimeout(function () {

                $('.site-branding img ').addClass('logo-in');

                $('.toggle-line').addClass('toggle-line-in');

                $('.hor-ov').addClass('anim-in')


            }, 1250);


            setTimeout(function () {

                $('.cygni-horizontal-titles').addClass('hor-init');
                $('.horizontal-progress, .horizontal-project-link, .horizontal-pagination').addClass('anim-in')

            }, 1650);



        }
        /* Horizontal Opening */


        /* List V2 Opening */

        if ($('.list-v2').length) {

            setTimeout(function () {

                var lvaCome = anime({
                    autoplay: true,
                    loop: false,
                    translateY: [120, 0],
                    opacity: [0, 1],
                    easing: "easeOutCubic",
                    duration: 800,
                    targets: '.listv2-project a',
                    delay: anime.stagger(100),
                    complete: function (anim) {
                        $('.listv2-wrapper').addClass('loaded');
                    }
                });


            }, 500);

            setTimeout(function () {
                $('.site-branding img ').addClass('logo-in');
            }, 1200);

            setTimeout(function () {
                $('.toggle-line').addClass('toggle-line-in');


            }, 1700);

            setTimeout(function () {

                $('.plus-button').addClass('pb-in');

                $('.fullscreen-footer a').each(function (i, element) {
                    $(element).delay(i * 75).queue(function (next) {
                        $(this).addClass('span-in');
                        next();
                    });
                });


            }, 1650);




        }

        /* List V2 Opening */

        /* Wall Opening */
        if ($('.wall-wrapper').length) {


            $('.overlay').addClass('overlay-ch-out');

            setTimeout(function () {

                $('.wall-project').each(function (i, element) {
                    $(element).delay(i * 100).queue(function (next) {
                        $(this).addClass('project-in');
                        next();
                    });
                });

            }, 200);

            setTimeout(function () {

                if ($('.site-navigation').hasClass('classic')) {
                    $('.site-navigation.classic .menu > li > a > span').each(function (i, element) {
                        $(element).delay(i * 100).queue(function (next) {
                            $(this).addClass('span-in');
                            next();
                        });
                    });

                } else {
                    $('.toggle-line').addClass('toggle-line-in');
                }


            }, 1000)

            setTimeout(function () {
                $('.site-branding img ').addClass('logo-in');
            }, 1400)

            setTimeout(function () {

                $('.plus-button').addClass('pb-in');

                $('.fullscreen-footer a').each(function (i, element) {
                    $(element).delay(i * 75).queue(function (next) {
                        $(this).addClass('span-in');
                        next();
                    });
                });


            }, 1650);

        };
        /* Wall Opening */

        /* List Carousel Opening */
        if ($('.list-titles').length) {


            setTimeout(function () {

                $('.list-image').each(function (i, element) {
                    $(element).delay(i * 250).queue(function (next) {
                        $(this).addClass('ino');
                        next();
                    });
                });


                $('.line').removeClass('line-arange')

            }, 200);

            setTimeout(function () {

                $('.list-title').each(function (i, element) {
                    $(element).delay(i * 100).queue(function (next) {
                        $(this).addClass('ino');
                        next();
                    });
                });


            }, 1000);


            setTimeout(function () {

                $('.lc-prev i, .lc-next i').addClass('ino')
                $('.lt-current, .lt-total').addClass('ino')
            }, 1250);


            setTimeout(function () {
                $('.site-branding img ').addClass('logo-in');
            }, 1500);

            setTimeout(function () {
                $('.toggle-line').addClass('toggle-line-in');

                $('.list-carousel').addClass('list-init')

            }, 2000);

        }
        /* List Carousel Opening */

        /* Big Slider Opening */
        if ($('.big-slider').length) {

            anime({
                autoplay: true,
                loop: false,
                targets: '.bs-active .title .span-line',
                translateY: ['110%', '0'],
                easing: "easeOutExpo",
                duration: 850,
                delay: anime.stagger(100)
            });

            anime({
                translateY: ['100%', '0'],
                opacity: ['0', '1'],
                easing: 'easeInOutCubic',
                duration: 600,
                autoplay: true,
                loop: false,
                targets: '.bs-active .summary .span-line',
                delay: function (el, i, l) {
                    return 1500 + (i * 100);
                },
            })

            anime({
                autoplay: true,
                loop: false,
                targets: '.bs-active .year span, .bs-active .meta div > span',
                translateY: ['110%', '0'],
                easing: "easeOutExpo",
                duration: 850,
                delay: function (el, i, l) {
                    return 1500 + (i * 100);
                },
            });

            anime({
                autoplay: true,
                loop: false,
                targets: '.bs-active .category span',
                translateY: ['110%', '0'],
                easing: "easeOutExpo",
                duration: 850,
                delay: 1200,
                complete: function (anim) {
                    $('.bs-active .category').addClass('in')
                }
            });



            setTimeout(function () {
                $('.bs-ov').addClass('bs-ov-in');

            }, 300)



            setTimeout(function () {
                $('.big-slide-pag i').addClass('anim-in');
                $('.project-url').addClass('loaded')
            }, 2000);

            setTimeout(function () {

                $('.bs-bullets .swiper-pagination-bullet').each(function (i, element) {
                    $(element).delay(i * 200).queue(function (next) {
                        $(this).addClass('anim-in');
                        next();
                    });
                });


            }, 2050);

        }
        /* Big Slider Opening */

        /* Vertical Opening */
        if ($('.vertical-projects').length) {

            var content = "<div class='vertingo'></div>";
            $(".site-main, .site-footer").wrapAll(content);

            setTimeout(function () {

                var verticalScroll = new LocomotiveScroll({
                    el: document.querySelector('.vertingo'),
                    smooth: true,
                    offset: ['10%', 0],
                });

                window.verticalScroll = verticalScroll;

                if (!$('.site-header').hasClass('sticky_nav_menu')) {

                    verticalScroll.on('scroll', (instance) => {
                        if (instance.scroll.y > 5) {
                            $('.site-header').addClass('st-op');
                        } else {
                            $('.site-header').removeClass('st-op');
                        }
                    });

                }



            }, 250);

            setTimeout(function () {
                $('.site-branding img ').addClass('logo-in');
            }, 1000);

            setTimeout(function () {
                $('.toggle-line').addClass('toggle-line-in');

                $('.vertical-projects').addClass('vertical-init')
            }, 1500);

        }
        /* Vertical Opening */


        /* Detailed Opening */
        if ($('.detailed').length) {



            var dtLoaded = anime({
                autoplay: false,
                loop: false,
                translateX: [-25, 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 1000,
                targets: '.project-year span, .project-excerpt span, .project-meta, .project-category span',
                delay: anime.stagger(50)

            });

            var dtTitleLoaded = anime({
                autoplay: false,
                loop: false,
                translateX: [-50, 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 1000,
                targets: '.project-title > div',
                delay: anime.stagger(100)

            });

            dtTitleLoaded.play();

            setTimeout(function () {


                $('.detailed').addClass('dt-loaded');
            }, 500);




            setTimeout(function () {
                dtLoaded.play();

                $('.detailed-dot').each(function (i, element) {
                    $(element).delay(i * 175).queue(function (next) {
                        $(this).addClass('dot-in');
                        next();
                    });
                });

            }, 1500);

            setTimeout(function () {

                $('.detailed-button').addClass('db-loaded');
                $('.plus-button').addClass('pb-in');

            }, 2500)

            setTimeout(function () {

                $('.site-branding img ').addClass('logo-in');
                $('.toggle-line').addClass('toggle-line-in');

            }, 2000);

        }

        /* Detailed Opening */


    }

    function pageScripts() {


        /* Search Form */

        $('.cygni-search').each(function () {

            var searchInput = $(this).find('input[type="search"]');

            searchInput.on('focus', function () {

                $(this).parent('.cygni-search').addClass('search-active')

            });

            searchInput.on('focusout', function () {
                $(this).parent('.cygni-search').removeClass('search-active')
            })



        });

        /* Search Form */

        ///////////// Blog Posts Page /////////////
        if (($('.pe-blog-posts').length) || ($('.archive').length) || ($('.search-res').length)) {

            $('.site-footer').addClass('blog-footer');

            var cygniSticky = $('.sticky').parent('.cygni-post').addClass('cygni-sticky')

            if ($('.pe-blog-posts .sidebar-passive').length) {
                var macy = Macy({
                    container: '.pe-blog-posts .c-col-12.sidebar-passive',
                    trueOrder: false,
                    waitForImages: true,
                    margin: {
                        x: 100,
                        y: 150
                    },
                    columns: 2,
                    breakAt: {
                        850: {
                            margin: {
                                y: 40,
                            },
                            columns: 1,
                        }
                    }
                });


            }



            $(window).on('scroll', function () {

                var cako = $(window).scrollTop() / 10;

                $('.j-back').css({
                    transform: 'translatex(-' + cako + 'px)',
                })

            });

            $('.cygni-post').each(function () {

                var postThumn = $(this).find('.pe-post-featured');

                if (postThumn.length < 1) {

                    $(this).addClass('no-thumb')

                } else if (postThumn.length > 0) {

                    $(this).addClass('has-thumb')
                }


            });

            $('.posts-navigation ul li').each(function () {

                var liLengt = 100 / $('.posts-navigation ul li').length;

                $(this).css('width', liLengt + '%')


            });


        };

        if ($('.cygni-single-post').length) {
            $('.site-footer').addClass('blog-footer');

        };
        ///////////// Blog Posts Page /////////////

        ///////////// Single Project Page /////////////
        if ($('.single-project').length > 0) {



            if ($('.single-project').find('.project-image').length < 1) {
                $('.project-header').addClass('no-image');
            } else {
                $('.project-header').removeClass('no-image');
            }

            $('.site-footer').addClass('project-footer');




        }
        ///////////// Single Project Page /////////////


        ///////////// Single Page /////////////

        if ($('.post-password-form').length) {

            $('body').addClass('elementor-password');

            let form = $('.post-password-form');

            form.wrap('<div class="wrapper"></div>')


        }

        ///////////// Single Page /////////////
    }

    ///////////////////////////////////////////// Scroll Animations /////////////////////////////////////////////


    if ($('.has-animation').length > 0) {
        $('.has-animation').each(function () {

            var haDelay = $(this).data('delay') + 's'
            var haDuration = $(this).data('duration') + 's'

            $(this).css({
                transitionDelay: haDelay,
                transitionDuration: haDuration

            })

        });
    };

    function lineAnimations() {

        $('.lines-up, .lines-down, .lines-fade-up, .lines-fade-down').each(function () {

            $(this).splitLines({
                tag: '<div><span class="split-line"></div>',
                keepHtml: true,
            });

            var splitLines = $(this).find('.split-line');

            splitLines.each(function (i) {

                var delay = i / 7.5;

                var splitParent = $(this).parents('.has-animation');
                var baseDelay = splitParent.data('delay');

                if (baseDelay == null) {

                    var finalDelay = delay + 's'

                } else {

                    var finalDelay = baseDelay + delay + 's'
                };


                $(this).css({
                    transitionDelay: finalDelay

                })


            })

        });


    };


    var cygniScroll = new LocomotiveScroll();

    cygniScroll.destroy();

    $('*').removeClass('is-inview');

    window.cygniScroll = cygniScroll;




    ///////////////////////////////////////////// Scroll Animations /////////////////////////////////////////////

    $(window).on('load', function () {
        window.scrollTo(0, 0);

        var pageLayout = $('body').attr('data-layout');
        var pageBackground = $('body').attr('data-background');

        $('body').addClass(pageLayout)
        $('body, .pi-ov, .np-ov').css('backgroundColor', pageBackground)

        pageScripts();
        lineAnimations();
        ////////// Page Loader /////////



        if ($('.site').hasClass('page-loader-disabled')) {
            var loadingDur = 1;
        } else {
            var loadingDur = $('.loading-text').data('duration');
        }

        var loadingAn = anime({
            targets: '.line',
            height: ['0%', '100%'],
            duration: loadingDur,
            delay: 0,
            easing: 'easeInOutCubic',
            begin: function (anim) {
                $('.cygni-loader').addClass('in');
            },
        })

        window.loadingAn = loadingAn;




        /* Opening Animations */
        loadingAn.finished.then(function () {

            $('.cygni-loader').addClass('out');

            $('.overlay').removeClass('ov-ready');

            $('.j-back').addClass('anim-in')


            setTimeout(function () {

                $('.site-main').addClass('loaded');
                $('.site-header').addClass('loaded');

            }, 100);

            setTimeout(function () {

                cygniScroll.init();

            }, 250);

            setTimeout(function () {

                if ($('.site-navigation').hasClass('classic')) {
                    $('.site-navigation.classic .menu > li > a > span').each(function (i, element) {
                        $(element).delay(i * 100).queue(function (next) {
                            $(this).addClass('span-in');
                            next();
                        });
                    });

                } else {
                    $('.toggle-line').addClass('toggle-line-in');
                }


            }, 1000)

            setTimeout(function () {
                $('.site-branding img ').addClass('logo-in');
            }, 1400)

            showcaseOpening();


        })
        /* Opening Animations */

        anime({
            targets: '.cygni-loader',
            bottom: '100%',
            duration: loadingDur,
            delay: 0,
            easing: 'easeInOutCubic',
        })

        anime({
            targets: '.cygni-loader .counter',
            innerHTML: [0, 100],
            round: 1,
            duration: loadingDur,
            delay: 0,
            easing: 'easeInOutCubic',
            update: function (anim) {

                var number = $('.cygni-loader .counter').html();

                if (number < 10) {

                    $('.cygni-loader .counter').prepend('00')
                } else if ((number >= 10) && (number < 100)) {
                    $('.cygni-loader .counter').prepend('0')
                }

            }
        })

        ////////// Page Loader /////////

    });


    ///////////// Elementor Widgets /////////////
    $(window).on('elementor/frontend/init', function () {


        /// Showcase Widgets ///

        elementorFrontend.hooks.addAction('frontend/element_ready/horizontal.default', function ($scope, $) {
            /* Horizontal */
            if ($('.cygni-horizontal').length > 0) {

                $('.cygni-horizontal').prepend('<span class="hor-ov"></span><span class="hor-ov"></span><span class="hor-ov"></span>')

                $('.line').addClass('line-arange');

                var horTitle = $('.cygni-horizontal .title');
                horTitle.each(function () {
                    $(this).wrapInner('<span></span>')

                })


                $('.cygni-horizontal-images').addClass('swiper-container');
                $('.cygni-horizontal-images').append('<div class="swiper-wrapper"></div>');

                $('.horizontal-item').each(function (i) {
                    i++
                    var horIndex = i;

                    $(this).attr('data-index', horIndex)

                    var horTitle = $(this).find('.title').text();
                    $(this).find('.title').attr('data-hover', horTitle)


                    if ($(this).find('video').length > 0) {

                        var vidSt = $(this).find('.horizontal-image').html();

                        var horWrapper = $('.cygni-horizontal-images .swiper-wrapper');

                        horWrapper.append('<div class="swiper-slide"><div class="horizontal-image-wrapper"><div class="slide-bgimg">' + vidSt + '</div></div></div>')

                    } else {

                        var imgUrl = $(this).find('.horizontal-image img').attr('src');

                        var horWrapper = $('.cygni-horizontal-images .swiper-wrapper');

                        horWrapper.append('<div class="swiper-slide"><div class="horizontal-image-wrapper"><div class="slide-bgimg"><img src="' + imgUrl + '"></div></div></div>')

                    }
                    
                    
                    let horTit = $(this).children('.title'),
                        horURL = $(this).children('a').attr('href');
                    
                    $(this).wrapInner('<a href="' + horURL + '"></a>')
                    
                    


                })

                var interleaveOffset = 0.5;

                var horImages = new Swiper('.cygni-horizontal-images', {
                    mousewheel: {
                        invert: false,
                    },
                    slidesPerView: 'auto',
                    speed: 800,
                    parallax: true,
                    watchSlidesProgress: true,
                    on: {
                        progress: function () {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                let slideProgress = swiper.slides[i].progress,
                                    innerOffset = swiper.width * interleaveOffset,
                                    innerTranslate = slideProgress * innerOffset;

                                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                    "translateX(" + innerTranslate + "px)";


                            }
                        },
                        setTransition: function (speed) {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = speed + "ms";
                                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                    speed + "ms";
                            }
                        },




                    },



                });

                $('.cygni-horizontal-titles .swiper-slide').each(function () {

                    var chTitle = $(this).find('.title').outerWidth();

                    $(this).css('width', chTitle)

                });


                var horTitles = new Swiper('.cygni-horizontal-titles', {
                    mousewheel: {
                        invert: false,
                    },
                    slidesPerView: 'auto',
                    spaceBetween: 200,
                    speed: 800,
                    navigation: {
                        nextEl: '.horizontal-next',
                        prevEl: '.horizontal-prev',
                    },
                    touchRatio: 4,
                    centeredSlides: true,
                    slideClass: 'horizontal-item',
                    wrapperClass: 'horizontal-wrapper',
                    containerClass: 'cygni-horizontal-titles',
                    pagination: {
                        el: '.horizontal-progress',
                        type: 'progressbar',

                        renderProgressbar: function (progressbarFillClass) {
                            return '<span class="hor-current">1</span>' +
                                '<span class="' + progressbarFillClass + '"></span>' +
                                '<span class="hor-total"></span>';
                        }
                    },

                });


                $('.hor-current').prepend('0');



                var totIndex = $('.horizontal-item').length;

                $('.hor-total').text(totIndex);
                $('.hor-total').prepend('0');


                var projectURL = $('.horizontal-item.swiper-slide-active').find('.project-url').attr('href');

                $('.horizontal-project-link a').attr('href', projectURL);

                horTitles.on('slideChangeTransitionEnd', function () {
                    var projectURL = $('.horizontal-item.swiper-slide-active').find('.project-url').attr('href');

                    $('.horizontal-project-link a').attr('href', projectURL);

                })


                horTitles.on('slideChangeTransitionEnd', function () {

                    var currentIndex = $('.cygni-horizontal-titles .swiper-slide-active').data('index');

                    $('.hor-current').text(currentIndex)

                    $('.hor-current').prepend('0')

                });


                horTitles.controller.control = horImages
                horImages.controller.control = horTitles

                $(window).on('resize', function () {

                    if ($(window).outerWidth() < 850) {
                        horTitles.params.slidesPerView = 1;
                        horTitles.params.centeredSlides = false;
                        horTitles.params.spaceBetween = 0;

                        horTitles.update();

                    }

                })

            }
            /* Horizontal */
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/listcarousel.default', function ($scope, $) {
            /* List */
            if ($('.list-titles').length > 0) {

                $('.line').addClass('line-arange');

                $('.list-image').each(function (i) {

                    var index = i + 1
                    var slide = $(this).attr('data-index', 'slide-' + index);
                    var slideIna = $(this).attr('data-slide', index);

                    var totIndex = $('.list-image').length;

                    $('.lt-total').text('0' + totIndex)

                    var slideClass = $(this).data('index');

                    $(this).addClass(slideClass)

                    window.slide = slide;

                    var title = $(this).find('.list-p-title').text();

                    window.title = title;

                });

                var interleaveOffset = 0.5;

                var listImages = new Swiper('.list-images', {
                    slidesPerView: 'auto',
                    speed: 750,
                    spaceBetween: 0,
                    watchSlidesProgress: true,
                    parallax: true,
                    navigation: {
                        nextEl: '.lc-next',
                        prevEl: '.lc-prev',
                    },
                    pagination: {
                        el: '.list-titles',
                        type: 'bullets',
                        bulletClass: 'list-title',
                        clickable: false,
                        renderBullet: function (index, className) {
                            var realIndex = index + 1;
                            var slideSelector = '.slide-' + realIndex;

                            return '<a href="" data-push="' + index + '"data-select="' + slideSelector + '" class="list-title"></a>';
                        }
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        750: {
                            centeredSlides: true,
                            spaceBetween: 250,
                        },

                    },
                    containerClass: 'list-images',
                    centeredSlides: false,
                    on: {
                        transitionStart: function () {

                            var currIndex = $('.swiper-slide-active').data('slide')

                            $('.lt-current').text('0' + currIndex)

                            if ($('.swiper-slide-active').hasClass('dark')) {

                                $('.list-carousel').addClass('dark-slide-init')

                            } else {
                                $('.list-carousel').removeClass('dark-slide-init')
                            }

                        }
                    },



                });

                $('.list-title').each(function () {
                    var slideSelect = $(this).data('select');
                    var title = $(slideSelect).find('.list-p-title').text();

                    var listURL = $(slideSelect).find('a').attr('href');

                    $(this).attr('href', listURL)

                    $(this).text(title);
                    $(this).attr('data-hover', title);


                });

                $('.list-title').on('mouseenter', function () {

                    var slidePush = $(this).data('push');

                    listImages.slideTo(slidePush)

                });

                $('.list-titles').on('mouseenter', function () {
                    $('.list-scroll').removeClass('hidden');
                });

                $('.list-titles').on('mouseleave', function () {
                    $('.list-scroll').addClass('hidden');
                });

                $('.list-titles').prepend('<span class="scroll-rat"></span>')
                $('.list-titles').append('<span class="scroll-rat"></span>')

                Scrollbar.init(document.querySelector('.list-titles'));

                $('video').each(function () {

                    let $this = $(this),
                        vid = $this.get(0);


                    vid.currentTime = 0;
                    vid.play();

                })


            };
            /* List */

        });
        elementorFrontend.hooks.addAction('frontend/element_ready/vertical.default', function ($scope, $) {
            /* Vertical */
            if ($('.vertical-projects').length > 0) {

                $('.vertical-projects').imagesLoaded(function () {

                    $('.vertical-image-wrapper').each(function () {

                        if ($(this).find('video').length > 0) {

                            var vVid = $(this).find('video')

                            var vVidHeight = vVid.outerHeight();

                            $(this).wrapInner('<div class="vertical-anim-holder"></div>');

                            $(this).css('height', vVidHeight + 'px');

                            vVid.css({
                                width: 'auto',
                                position: 'absolute'
                            })

                        } else {

                            var vImg = $(this).find('img')

                            var vImgHeight = vImg.outerHeight();

                            $(this).wrapInner('<div class="vertical-anim-holder"></div>');



                            $(this).css('height', vImgHeight + 'px');

                            vImg.css({
                                width: 'auto',
                                position: 'absolute'
                            })

                        }

                    })



                });



                $('.vertical-item-title').each(function (i) {

                    $(this).splitLines({
                        tag: '<div><span class="title-line"></div>',
                        keepHtml: true,
                    });

                    var viLines = $(this).find('div');

                    /*    viLines.each(function (i) {

                            var viLine = $(this).find('span')

                            var viDelay = i / 5 + 0.55;

                            viLine.css({
                                transitionDelay: viDelay + 's'

                            })


                        }) */

                });

                $('a').on('click', function () {
                    verticalScroll.destroy();


                });

            };
            /* Vertical */
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/wall.default', function ($scope, $) {
            /* Wall Start */
            if ($('.wall-wrapper').length > 0) {

                $('.wall-project').each(function (i) {

                    i++
                    var $this = $(this);

                    $this.attr('data-project', 'project-' + i)

                    var wallCat = $this.find('.category').html();

                    $('.wall-project-category').append('<span class="wall-cat project-' + i + '">' + wallCat + '</span>')


                });

                $('.plus-button a').prepend('<span class="line-s"></span><span class="line-s"></span>')
                $('.plus-button a').on('mouseenter', function () {

                    $(this).parent('.plus-button').addClass('pb-active');

                });

                $('.plus-button').on('mouseleave', function () {
                    $(this).removeClass('pb-active')
                });



                $('.title, .year').each(function () {
                    var ptText = $(this).wrapInner('<span></span>')

                })

                $('.wall-project a').on('mouseenter', function () {
                    $('.wall-project').addClass('pw-op');

                    $(this).parent('.wall-project').removeClass('pw-op');

                    var activeCat = $(this).parent('.wall-project').data('project');

                    $('.wall-project-category').find('.' + activeCat).addClass('active')


                });

                $('.wall-project a').on('mouseleave', function () {
                    $('.wall-project').removeClass('pw-op');
                    $('.wall-cat').removeClass('active')

                });

            };
            /* Wall End */
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/bigslider.default', function ($scope, $) {

            /* Big Slider */
            if ($('.big-slider').length > 0) {

                $('.line').addClass('line-arange');

                $('.big-slider-item').each(function (i) {

                    i++

                    var $this = $(this);
                    $this.addClass('slider-item-' + i);

                    var bigImage = $this.find('.image').html();

                    var autoPlay = $this.data('autoplay');

                    $('.bs-splitted .swiper-wrapper').append('<div data-swiper-autoplay="' + autoPlay + '" data-slide="slider-item-' + i + '" class="swiper-slide"><div class="big-image">' + bigImage + '</div></div>');

                    if ($this.is(":first-child")) {
                        $this.addClass('bs-active')
                    }

                    var title = $this.find('.title');
                    var summary = $this.find('.summary');

                    if (title.length) {

                        title.splitLines({
                            tag: '<div><span class="span-line"></div>',
                            keepHtml: true,
                        });

                    }

                    if (summary.length) {

                        summary.splitLines({
                            tag: '<div><span class="span-line"></div>',
                            keepHtml: true,
                        });

                    }


                })


                $('.big-slide-button').wrapInner('<a href="#" class="project-url"><p class="bsb-link"><p></a>')
                $('.big-slide-button .project-url').prepend('<span></span><span></span><span></span><span></span>')

                $('.bsb-link').wrapInner('<wrap></wrap>');

                var bsURLFirst = $('.big-slider-item a:first-child').attr('href');

                $('.big-slide-button .project-url').attr('href', bsURLFirst);




                $('.big-image').addClass('big-image-anim');


                var interleaveOffset = 0.45;
                var bigImages = new Swiper('.big-images', {
                    navigation: {
                        nextEl: '.big-slide-next',
                        prevEl: '.big-slide-prev',
                    },
                    slidesPerView: 1,
                    mousewheel: {
                        invert: false,
                    },
                    pagination: {
                        el: '.bs-bullets',
                        type: 'bullets',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">0' + (index + 1) + '</span>';
                        }
                    },
                    loop: false,
                    autoplay: {
                        delay: 10000,
                        waitForTransition: false,
                        disableOnInteraction: false
                    },
                    speed: 1300,
                    direction: 'vertical',
                    on: {

                        init: function () {

                            $('.big-slider-item .year, .big-slider-item .category, .big-slider-item .meta div').each(function () {
                                $(this).wrapInner('<span></span>')

                            })

                        },

                        transitionStart: function () {
                            $('.big-slider .title .span-line').css({
                                transition: 'auto'
                            });
                            $('.bs-ov').addClass('trans-start');

                        },
                        transitionEnd: function () {
                            $('.big-slider-item').removeClass('bs-active');

                            var activeSlide = $('.swiper-slide-active').data('slide');

                            $('.' + activeSlide).addClass('bs-active');

                            $('.swiper-pagination-bullet-active').removeClass('progress-init')

                            setTimeout(function () {
                                $('.swiper-pagination-bullet-active').addClass('progress-init')


                            }, 1);


                            var bsURL = $('.big-slider-item.bs-active a').attr('href');

                            $('.big-slide-button .project-url').attr('href', bsURL);

                        },

                        slideNextTransitionStart: function () {


                            var titleAnimNext = anime({
                                autoplay: true,
                                loop: false,
                                targets: '.bs-active .title .span-line',
                                translateY: ['0', '-110%'],
                                easing: "easeInExpo",
                                duration: 650,
                                delay: anime.stagger(100)
                            });

                            var overlayAnimNext = anime({
                                translateY: ['100%', '0'],
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: true,
                                loop: false,
                                targets: '.bs-ov',
                                delay: function (el, i) {
                                    return i * 50;
                                },

                            });

                        },

                        slideNextTransitionEnd: function () {
                            var titleAnimNextEnd = anime({
                                autoplay: true,
                                loop: false,
                                targets: '.bs-active .title .span-line',
                                translateY: ['110%', '0'],
                                easing: "easeOutExpo",
                                duration: 650,
                                delay: anime.stagger(100)
                            });

                            var overlayAnimNextEnd = anime({
                                translateY: ['0', '-100%'],
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: true,
                                loop: false,
                                targets: '.bs-ov',
                                delay: function (el, i) {
                                    return i * 50;
                                },

                            });

                        },

                        slidePrevTransitionStart: function () {
                            var titleAnimPrev = anime({
                                autoplay: true,
                                loop: false,
                                targets: '.bs-active .title .span-line',
                                translateY: ['0', '110%'],
                                easing: "easeInExpo",
                                duration: 650,
                                delay: anime.stagger(100, {
                                    from: 'last'
                                })
                            });

                            var overlayAnimPrev = anime({
                                translateY: ['-100%', '0'],
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: true,
                                loop: false,
                                targets: '.bs-ov',
                                delay: function (el, i) {
                                    return i * 50;
                                },

                            });

                        },

                        slidePrevTransitionEnd: function () {

                            var titleAnimPrevEnd = anime({
                                autoplay: true,
                                loop: false,
                                targets: '.bs-active .title .span-line',
                                translateY: ['-110%', '0'],
                                easing: "easeOutExpo",
                                duration: 650,
                                delay: anime.stagger(100, {
                                    from: 'last'
                                })
                            });

                            var overlayAnimPrev = anime({
                                translateY: ['0', '100%'],
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: true,
                                loop: false,
                                targets: '.bs-ov',
                                delay: function (el, i) {
                                    return i * 50;
                                },

                            });


                        },

                    }


                });

                $('.swiper-pagination-bullet-active').addClass('progress-init')


            }
            /* Big Slider */
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/detailed.default', function ($scope, $) {

            /* Detailed */

            if ($('.detailed').length) {

                $('.plus-button a').prepend('<span class="line-s"></span><span class="line-s"></span>')

                var projectURL = $('.detailed-project:nth-child(1)').find('a').attr('href');

                $('.detailed-button').wrapInner('<a href="' + projectURL + '"><p></p></a>');
                $('.detailed-button').prepend('<span></span><span></span><span></span><span></span>')


                $('.plus-button a').on('mouseenter', function () {

                    $(this).parent('.plus-button').addClass('pb-active');

                });

                $('.plus-button').on('mouseleave', function () {
                    $(this).removeClass('pb-active')
                });

                $('.detailed-images').prepend('<div class="swiper-wrapper"></div>')

                $('.detailed-project').each(function (i) {

                    i++
                    $(this).addClass('project-' + i);

                    var projectImage = $(this).find('.project-image').html();

                    $('.detailed-images .swiper-wrapper').append('<div class="swiper-slide" data-slide="' + i + '"><div class="detailed-image"><div class="slide-bgimg">' + projectImage + '</div></div></div>')

                });

                $('.big-slide-button').wrapInner('<a href="#" class="project-url"><p class="bsb-link"><p></a>')
                $('.big-slide-button .project-url').prepend('<span></span><span></span><span></span><span></span>')



                var interleaveOffset = 0.7;

                var detailedImages = new Swiper('.detailed-images', {
                    mousewheel: {
                        invert: false,
                        eventsTarged: '.detailed-portfolios'
                    },
                    navigation: {
                        nextEl: '.detailed-next',
                        prevEl: '.detailed-prev',
                    },
                    pagination: {
                        el: '.detailed-dots',
                        type: 'bullets',
                        clickable: true,
                        bulletClass: 'detailed-dot',
                        bulletActiveClass: 'dot-index-active',
                        renderBullet: function (index, className) {
                            return ' <span class="' + className + '"><span class="dot-index">0' + (index + 1) + '</span></span>'
                        },
                    },
                    slidesPerView: 1,
                    direction: 'vertical',
                    speed: 1200,
                    parallax: true,
                    watchSlidesProgress: true,
                    on: {
                        init: function () {

                            var dtPSelect = $('.swiper-slide-active').data('slide');
                            var dtPvis = '.project-' + dtPSelect;

                            $(dtPvis).addClass('dp-active');

                            $('.project-year, .project-category, .project-excerpt').wrapInner('<span></span>')

                            $('.project-title').each(function () {

                                $(this).splitLines({
                                    tag: '<div><span class="dpt-line"></div>',
                                    keepHtml: true,
                                });

                            });

                        },

                        progress: function () {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                let slideProgress = swiper.slides[i].progress,
                                    innerOffset = swiper.width * interleaveOffset,
                                    innerTranslate = slideProgress * innerOffset;

                                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                    "translateY(" + innerTranslate + "px)";


                            }
                        },
                        setTransition: function (speed) {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = speed + "ms";
                                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                    speed + "ms";
                            }
                        },


                        slideNextTransitionStart: function () {

                            var dtNextOut = anime({
                                autoplay: false,
                                loop: false,
                                translateX: [0, 25],
                                opacity: [1, 0],
                                easing: "easeInCubic",
                                duration: 600,
                                targets: '.dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span',
                                delay: anime.stagger(50, {
                                    from: 'last'
                                })

                            });



                            dtNextOut.restart();



                        },

                        slideNextTransitionEnd: function () {
                            var dtNextIn = anime({
                                autoplay: false,
                                loop: false,
                                translateX: [-25, 0],
                                opacity: [0, 1],
                                easing: "easeOutCubic",
                                duration: 600,
                                targets: '.dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span',
                                delay: anime.stagger(50)

                            });
                            dtNextIn.restart();

                        },

                        slidePrevTransitionStart: function () {

                            var dtPrevOut = anime({
                                autoplay: false,
                                loop: false,
                                translateX: [0, -25],
                                opacity: [1, 0],
                                easing: "easeInCubic",
                                duration: 600,
                                targets: '.dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span',
                                delay: anime.stagger(50, {
                                    from: 'last'
                                })
                            });
                            dtPrevOut.restart()


                        },
                        slidePrevTransitionEnd: function () {

                            var dtPrevIn = anime({
                                autoplay: false,
                                loop: false,
                                translateX: [25, 0],
                                opacity: [0, 1],
                                easing: "easeOutCubic",
                                duration: 600,
                                targets: '.dp-active .project-title > div, .dp-active .project-year span, .dp-active .project-excerpt span, .dp-active .project-meta, .dp-active .project-category span',
                                delay: anime.stagger(50)

                            });

                            dtPrevIn.restart();
                        },

                        transitionEnd: function () {

                            $('.detailed-project').removeClass('dp-active');
                            var activeIndex = $('.swiper-slide-active').data('slide');
                            var dptAcive = '.project-' + activeIndex;

                            $(dptAcive).addClass('dp-active');

                            $('.detailed-fraction .current').html('0' + activeIndex);

                            var projectURL = $(dptAcive).find('a').attr('href')

                            $('.detailed-button a').attr('href', projectURL)


                        }

                    }

                });

                var totIndex = $('.detailed-dot').length;

                $('.detailed-fraction .total').html('0' + totIndex);


            }

            /* Detailed */


        });
        elementorFrontend.hooks.addAction('frontend/element_ready/grid.default', function ($scope, $) {
            /* Grid */

            if ($('.portfolio-grid').length) {

                $('.grid-project').each(function (i) {
                    i++

                    while (i >= 6) {
                        i = i - 5
                    }

                    $(this).addClass('width-' + i)


                })

                $('.grid-project-cat, .grid-project-title, .grid-project-index').each(function () {

                    $(this).wrapInner('<span></span>')

                })








                var $pgrid = $('.portfolio-grid').masonry({
                    itemSelector: '.grid-project',
                    columnWidth: '.pg-sizer',
                    gutter: 0,
                    percentPosition: true
                });

                // layout Masonry after each image loads
                $pgrid.imagesLoaded().progress(function () {
                    $pgrid.masonry('layout');


                    $('.width-1').each(function () {

                        var w1 = $(this);
                        var next3 = w1.nextAll('.width-3').first();
                        var mb = next3.outerHeight();

                        w1.css({
                            marginBottom: mb / 2
                        })

                    })

                    $('.width-3').each(function () {

                        var w3 = $(this);
                        var next5 = w3.nextAll('.width-5').first();
                        var w3h = w3.outerHeight();
                        var mb = next5.outerHeight();

                        w3.css({
                            marginBottom: mb
                        })
                    })

                    $(".width-3").last().addClass("no-mar");

                    $('.width-5').each(function () {
                        var w5 = $(this);
                        var prev3 = w5.prevAll('.width-3').first();

                        var mt = prev3.outerHeight();

                        w5.css({
                            marginTop: mt / 2
                        })

                    })

                    $('.width-2').each(function () {

                        var w2 = $(this);
                        var prev1 = w2.prevAll('.width-1').first();
                        var mt = prev1.outerHeight();

                        w2.css({
                            marginTop: mt / 2
                        })
                    })



                });

            }

            /* Grid */
        });


        elementorFrontend.hooks.addAction('frontend/element_ready/listv2.default', function ($scope, $) {
            /* List V2 Start */
            if ($('.list-v2').length > 0) {

                $('.plus-button a').prepend('<span class="line-s"></span><span class="line-s"></span>')
                $('.plus-button a').on('mouseenter', function () {

                    $(this).parent('.plus-button').addClass('pb-active');

                });

                $('.plus-button').on('mouseleave', function () {
                    $(this).removeClass('pb-active')
                });


                var project = $('.listv2-project');

                Scrollbar.init(document.querySelector('.listv2-wrapper'));

                project.each(function (i) {
                    i++

                    let $this = $(this),
                        listv2Img = $this.find('.project-image');

                    listv2Img.addClass('image_' + i)



                    $('.lv2-images').append(listv2Img);


                    if (i < 10) {

                        $this.attr('data-index', '0' + i);

                    } else if (i > 9) {
                        $this.attr('data-index', i);
                    }

                    $this.attr('data-image', '.image_' + i)



                })


                $('.listv2-project a').on('mouseenter', function (i) {



                    let $this = $(this),
                        image = $this.parent('.listv2-project').attr('data-image'),
                        allImages = $('.project-image'),
                        allProjects = $('.listv2-project');

                    allImages.removeClass('active');
                    $(image).addClass('active');

                    $('.listv2-wrapper').addClass('hovered')

                    allProjects.removeClass('hover')
                    $this.parent(allProjects).addClass('hover');




                })

                $('.listv2-project a').on('mouseleave', function () {

                    let $this = $(this),
                        image = $this.children('.project-image'),
                        allImages = $('.project-image'),
                        allProjects = $('.listv2-project')

                    $('.listv2-wrapper').removeClass('hovered');
                    allProjects.removeClass('hover');
                    allImages.removeClass('active');

                })

            }
            /* List V2 End */
        });

        /// Showcase Widgets ///

        /// Content Widgets ///


        elementorFrontend.hooks.addAction('frontend/element_ready/cygnisingleimage.default', function ($scope, $) {


            /* Image Wrapper */
            if ($('.image-wrapper').length > 0) {

                var imageWrapper = $scope.find('.image-wrapper');




                var imImg = imageWrapper.find('img');

                var imwDelay = imageWrapper.data('delay');

                if (imageWrapper.hasClass('has-animation')) {

                    var imwHeight = imageWrapper.outerHeight();

                    imageWrapper.css({
                        transitionDelay: '0s',
                        height: imwHeight + 'px'
                    })


                    imImg.css('position', 'absolute');

                    if ((imageWrapper.hasClass('slide-left')) || (imageWrapper.hasClass('slide-right'))) {

                        imImg.css('width', 'unset')

                    }

                    imageWrapper.wrapInner('<div class="slide-anim-holder"></div>');


                    if (imwDelay !== null) {

                        $('.slide-anim-holder').css({
                            transitionDelay: imwDelay + 's'
                        })

                    }


                    var saHolder = imageWrapper.find('.slide-anim-holder');
                    saHolder.addClass('sa-ready');



                }

                if (imageWrapper.hasClass('image-lightbox')) {

                    ////////// Image Lightbox Start //////////

                    var dataMfpSrc = imImg.attr('src');

                    imImg.attr('data-mfp-src', dataMfpSrc);

                    $('.image-lightbox').magnificPopup({
                        delegate: 'img', // child items selector, by clicking on it popup will open
                        type: 'image',
                        closeOnContentClick: true,
                        closeBtnInside: false,
                        mainClass: 'image-lightbox', // class to remove default margin from left and right side
                        image: {
                            verticalFit: true
                        },
                        zoom: {
                            enabled: true,
                            duration: 300 // don't foget to change the duration also in CSS
                        },

                        // other options
                    });

                    ////////// Image Lightbox End //////////


                }





            }
            /* Image Wrapper */


        });

        elementorFrontend.hooks.addAction('frontend/element_ready/cygniteammember.default', function ($scope, $) {
            /* Team Member */


            var tmName = $scope.find('.team-member-name');
            var tmPos = $scope.find('.team-member-pos')

            tmName.wrapInner('<span></span>');
            tmPos.wrapInner('<span></span>');




            /* Team Member */



        });


        elementorFrontend.hooks.addAction('frontend/element_ready/cygniaccordion.default', function ($scope, $) {

            /* Accordion */
            var acTitles = $scope.find('.accordion-title');
            var acContents = $scope.find('.accordion-content')

            acTitles.each(function (i) {


                var acTitle = $(this);

                acContents.hide();


                if (i < 10) {
                    var dataIn = '0' + (i + 1);
                };

                if (i > 9) {
                    var dataIn = i + 1;
                };

                acTitle.attr('data-index', dataIn);

                acTitle.on('click', function () {


                    var acContent = acTitle.find('.accordion-content');

                    if (acContent.hasClass('ac-active')) {
                        acContent.slideUp(500);
                        acContent.removeClass('ac-active');
                    } else {
                        acContents.slideUp(500);
                        acContents.removeClass('ac-active');

                        acContent.slideDown(500);
                        acContent.addClass('ac-active');


                    }



                });


            })

            var acTitle = $scope.find('.accordion-title')
            /* Accordion */
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/cygniembedvideo.default', function ($scope, $) {


            /* Embed Video*/
            if ($('.pe-embed-video').length > 0) {

                $('.pe-embed-video').append('<span class="pe-video-play"><i class="icon-play"></i></span><span class="pe-video-overlay"></span>')

                const cVideo = new Plyr('.pe-video', {
                    controls: ["play-large",
                            "play",
                            "progress",
                            "duration",
                            "mute",
                            "volume",
                            "fullscreen"
                        ],
                    autoplay: true,
                    muted: true,
                    volume: 0,
                    quality: {
                        default: 1080
                    },
                    loop: {
                        active: true
                    },

                });

                $('.pe-video-play').on('click', function () {
                    $(this).fadeOut(500);
                    $('.pe-video-overlay').fadeOut(500);
                    cVideo.restart();
                    cVideo.increaseVolume(1);

                });

                window.cVideo = cVideo;
            };
            if ($('.pe-video-style-2').length > 0) {

                const cVideo2 = new Plyr('.pe-video-2', {
                    controls: ["play-large",
                            "play",
                            "progress",
                            "duration",
                            "mute",
                            "volume",
                            "fullscreen"
                        ],

                });

                $('.icon-play').on('click', function () {

                    var videoPlay = $(this).parent('.video-control');
                    videoPlay.addClass('controls-gone');
                    cVideo2.play();
                    cVideo2.increaseVolume(1);
                });

                window.cVideo2 = cVideo2;

            };
            /* Embed Video*/
        });



        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function ($scope) {

            /* Image Carousel */
            if ($('.pe-carousel').length > 0) {
                var peCarousel = new Swiper('.pe-carousel', {
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 50,
                    speed: 1500,
                    grabCursor: true

                });
            }
            /* Image Carousel */



            /* Page Nav */
            if ($('.page-nav').length > 0) {

                $('.page-nav').each(function () {
                    var lp = $(this).find('.lp-title');
                    var lpT = lp.text();
                    lp.attr('data-hover', lpT)

                });


            };
            /* Page Nav */

            /* Form */
            $('form').each(function () {

                var input = $(this).find('input, textarea');
                var field = $(this).find('.field-wrap, .message-wrap');

                input.on('focus', function () {

                    var inputActive = $(this);

                    var activeField = inputActive.parents('.field-wrap');


                    activeField.addClass('field-active')

                });

                input.on('focusout', function () {
                    field.removeClass('field-active')
                })


            });
            $('.comment-reply-link').addClass('underline')
            /* Form */

            /* Sectıon Background*/
            $('.section-bars').each(function () {

                var sectionBars = $(this);

                $(this).parents('.elementor-section').addClass('has-bars');



                var parentElem = sectionBars.parents('.elementor-widget');

                parentElem.css('position', 'static')

            });
            /* Sectıon Background*/


        });
        /// Content Widgets ///

        elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($scope) {

            if ($('body').hasClass('elementor-editor-active')) {
                showcaseOpening();
                console.log('cako');
                cygniScroll.init();
            }



        });


    });


    ///////////// Elementor Widgets /////////////


    ///////////// Page Transitions /////////////
    if ($('#page').hasClass('ajax-enabled')) {

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.loading-text');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        $('#wpadminbar').attr('data-barba-prevent', 'all');
        $('#elementor-editor-wrapper').attr('data-barba-prevent', 'all');

        barba.init({
            transitions: [{
                name: 'default-transition',
                leave() {

                    return new Promise(function (resolve, reject) {

                        if (($('.site-navigation').hasClass('full_screen')) && ($('.menu-toggle').hasClass('is-active'))) {

                            $('.loading-text').addClass('page-change');

                            anime({
                                autoplay: true,
                                loop: false,
                                targets: '.loading-text .letter',
                                translateY: [100, 0],
                                opacity: [0, 1],
                                easing: "easeOutExpo",
                                duration: 1000,
                                delay: (el, i) => 400 + 30 * i,
                                complete: function (anim) {
                                    resolve();
                                }

                            });
                        } else {


                            $('.overlay').addClass('page-change');
                            $('.loading-text').addClass('page-change');

                            anime({
                                autoplay: true,
                                loop: false,
                                targets: '.loading-text .letter',
                                translateY: [100, 0],
                                translateZ: 0,
                                opacity: [0, 1],
                                easing: "easeOutExpo",
                                duration: 1000,
                                delay: (el, i) => 400 + 30 * i,
                                complete: function (anim) {
                                    resolve();
                                }

                            });

                            anime({
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: true,
                                loop: false,
                                targets: '.overlay.page-change',
                                translateY: ['100%', '0'],
                                delay: function (el, i) {
                                    return i * 50;
                                },

                            });
                        }

                    })
                },
                afterEnter() {

                    return new Promise(function (resolve, reject) {


                        if (($('.site-navigation').hasClass('full_screen')) && ($('.menu-toggle').hasClass('is-active'))) {

                            $('.menu-ov').removeClass('menu-ov-in');
                            $('.menu-toggle').removeClass('is-active');

                            setTimeout(function () {
                                $('.site-header').removeClass('dark-nav-active light-nav-active');
                                $('.site-navigation').removeClass('nav-open')

                            }, 380);

                        }

                        anime({
                            easing: 'easeInOutCubic',
                            duration: 600,
                            autoplay: true,
                            loop: false,
                            targets: '.overlay.page-change',
                            translateY: ['0', '-100%'],
                            delay: function (el, i) {
                                return i * 50;
                            },

                        });

                        anime({
                            autoplay: true,
                            loop: false,
                            targets: '.loading-text .letter',
                            translateY: [0, -100],
                            translateZ: 0,
                            opacity: [1, 0],
                            easing: "easeInExpo",
                            duration: 1000,
                            delay: (el, i) => 30 * i,
                            complete: function (anim) {
                                resolve();
                                $('.overlay').removeClass('page-change');
                                $('.loading-text').removeClass('page-change');
                            }

                        })


                    })
                }
        }]
        });


        barba.hooks.enter((data) => {
            window.scrollTo(0, 0);

            var response = data.next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html);
            var bodyClasses = $(response).filter('notbody').attr('class');
            var bodyStyle = $(response).filter('notbody').attr('style');
            var bodyLayout = $(response).filter('notbody').attr('data-layout');
            var pageBackground = $(response).filter('notbody').attr('data-background');

            $('body').attr('class', bodyClasses);
            $('body').attr('style', bodyStyle);
            $('body').attr('data-layout', bodyLayout);


            $('body, .pi-ov, .np-ov').css('backgroundColor', pageBackground)

            var $newPageHead = $('<head />').html(
                $.parseHTML(
                    data.next.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0], // <- use data argument
                    document,
                    true
                )
            );
            var headTags = [
			'meta[name="keywords"]',
			'meta[name="description"]',
			'meta[property^="og"]',
			'meta[name^="twitter"]',
			'meta[itemprop]',
			'link[itemprop]',
			'link[rel="prev"]',
			'link[rel="next"]',
			'link[rel="canonical"]',
			'link[rel="alternate"]',
			'link[rel="shortlink"]',
			'link[id*="elementor"]',
			'link[id*="eael"]', // Essential Addons plugin post CSS
			'style[id*="elementor"]',
			'style[id*="eael"]', // Essential Addons plugin inline CSS

    ].join(',');

            $('head').find(headTags).remove();
            $newPageHead.find(headTags).appendTo('head');

            $('.line').removeClass('line-arange')

            pageScripts()

            if (typeof window.elementorFrontend !== 'undefined') {
                elementorFrontend.init();
            };

            $('.site-footer').insertAfter('#primary');
            $('.site-header').removeClass('st-op')

            if ($('.vertical-projects').length < 1) {
                $('.vertingo').remove();
            }


        });


        barba.hooks.afterEnter((data) => {

            var pageBg = $('body').css('backgroundColor');

            var pageLayout = $('body').attr('data-layout');

            $('body').addClass(pageLayout)

            setTimeout(function () {
                lineAnimations()
                $('.site-main').addClass('loaded');
                $('.site-header').addClass('loaded');

                showcaseOpening();
            }, 1000);

            setTimeout(function () {

                cygniScroll.init();
            }, 1450)

            $('.site-branding img ').addClass('logo-in');

        });
    }
    ///////////// Page Transitions /////////////


})(jQuery);
