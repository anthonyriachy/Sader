(function ($) {

    "use strict";


    $(".tree").treemenu({ delay: 300 }).openActive();
   
    //Update header style + Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var mainHeader = $('.main-header').height();
            var windowpos = $(window).scrollTop();
            if (windowpos >= mainHeader) {
                $('.bounce-in-header').addClass('now-visible');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.bounce-in-header').removeClass('now-visible');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }

   
    headerStyle();
    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });


        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }


 
    //Progress Bar / Levels
    if ($('.progress-levels .progress-box .bar-fill').length) {
        $(".progress-box .bar-fill").each(function () {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width', progressWidth + '%');
            $(this).parents('.progress-box').children('.percent').html(progressWidth + '%');
        });
    }


    //Testimonials Carousel Slider
    if ($('.pager-carousel').length) {
        $('.pager-carousel').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            rtl: true,
            autoplayHoverPause: false,
            autoplay: false,
            smartSpeed: 700,
            items: 1,
            navText: ['<span class="fa fa-angle-right"></span>', '<span class="fa fa-angle-left"></span>'],

        });
    }
    //news Carousel Slider
    if ($('.news-carousel').length) {
        $('.news-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            rtl: true,
            dots: false,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-right"></span>', '<span class="fa fa-angle-left"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                760: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1100: {
                    items: 1
                }
            }
        });
    }


    //Team Carousel
    if ($('.video-carousel').length) {
        $('.video-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            rtl: true,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-right"></span>', '<span class="fa fa-angle-left"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    //Sponsors Slider
    if ($('.boxed-services').length) {
        $('.boxed-services').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            rtl: true,
            dots: false,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-right"></span>', '<span class="fa fa-angle-left"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                760: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1100: {
                    items: 1
                }
            }
        });
    }


    // Fact Counter
    function factCounter() {
        if ($('.fact-counter').length) {
            $('.fact-counter .counter-column.animated').each(function () {

                var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }

                    });
                }

            });
        }
    }


    //Accordions
    if ($('.accordion-box').length) {
        $(".accordion-box .accord-btn").on('click', function () {

            var parentBlock = $(this).parents('.accordion');

            $(parentBlock).children('.accord-content').slideToggle(300);
            $(parentBlock).toggleClass('active-block');
            $(this).toggleClass('active');

        });
    }


    //Tabs / Jquery Tabs
    if ($('.tabs-box').length) {

        //Tabs
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));
            $('.tabs-box .tab-buttons .tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.tabs-box .tabs-content .tab').hide(0);
            $('.tabs-box .tabs-content .tab').removeClass('active-post');
            $(target).fadeIn(200);
            $(target).addClass('active-post');
            var windowWidth = $(window).width();
            if (windowWidth < 767) {
                $('html, body').animate({
                    scrollTop: $('.tabs-content').offset().top
                }, 1000);
            }

            if ($('.tabs-box .default-masonry').length) {
                enableMasonry();
            }
        });

    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }

    if ($('.fancybox-media').length) {
        $(".fancybox-media").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: '70%',
            height: '70%',
            autoSize: false,
            openEffect: 'elastic',
            closeEffect: 'elastic'
        });
    }
    //Gallery With Filters List
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
		  {
		      boxClass: 'wow',      // animated element css class (default is wow)
		      animateClass: 'animated', // animation css class (default is animated)
		      offset: 0,          // distance to the element when triggering the animation (default is 0)
		      mobile: true,       // trigger animations on mobile devices (default is true)
		      live: true       // act on asynchronously loaded content (default is true)
		  }
		);
        wow.init();
    }

    $('.select-to').selectize();
    $('.lower-content .list, .boxed-icon-column').matchHeight();
    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
        factCounter();
        $(function () {
            var $chart = $('.chart');
            $chart.easyPieChart({
                scaleColor: false,
                trackColor: 'rgba(255,255,255,0.3)',
                barColor: '#E7F7F5',
                lineWidth: 5,
                lineCap: 'butt',
                animate: 8000,
                size: 200,
                onstep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        });
    });



    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }

    });



})(window.jQuery);

$(document).ready(function () {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();    
});


$(document).ready(function ()
{
    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });
});

