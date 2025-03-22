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

