(function ($) {

    
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
})(window.jQuery);

document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".bounce-in-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("visible"); // Show header when scrolling down
        } else {
            header.classList.remove("visible"); // Hide when back to top
        }
    });
});

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

