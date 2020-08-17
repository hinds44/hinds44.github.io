(function ($) {
    "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 62)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

  // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

  // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

  // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 62
    });

  // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
  // Collapse now if page is not at top
    navbarCollapse();
  // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
    
    $.getJSON("https://spreadsheets.google.com/feeds/list/1t2_HHLkibAybPORmXuDDEFEyetC3p7r1blQRpjzinXg/od6/public/values?alt=json", function (data) {
        var sheetData = data.feed.entry;

        var i;
        for (i = 0; i < sheetData.length; i++) {

            var name = data.feed.entry[i]['gsx$_cn6ca']['$t'];
            var age = data.feed.entry[i]['gsx$_cokwr']['$t'];
            var email = data.feed.entry[i]['gsx$_cpzh4']['$t'];

            document.getElementById('demo').innerHTML += ('<tr>'+'<td>'+name+'</td>'+'<td>'+age+'</td>'+'<td>'+email+'</td>'+'</tr>');

        }
    });

    
})(jQuery); // End of use strict
