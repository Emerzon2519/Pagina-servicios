(function ($) {
    "use strict";

    //=================================
    // Preloader Start
    //=================================
    $(window).on("load", function () {
        $(".preloader").fadeOut(500);
    });

    /*********************************
    /*  Scroll Top Bar
    *********************************/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".scroll-to-target").removeClass("open");
        } else {
            $(".scroll-to-target").addClass("open");
        }
    });

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top,
                },
                500
            );
        });
    }
    //=================================
    // Sticky Navbar
    //=================================
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $(".header-sticky");

        if (scrolling >= 50) {
            $(stikey).addClass("nav-bg");
        } else {
            $(stikey).removeClass("nav-bg");
        }
    });

    //=================================
    // MobileMenu Toggler
    //=================================
    $("#menuTaggler").on("click", function () {
        $(".nav-item").slideToggle();
    });

    if ($(window).resize() < 992) {
        $(".nav-item li a").on("click", function () {
            $(this).parents(".navbar-right").find(".nav-item").slideUp(500);
        });
    } else {
        $(".nav-item li a").on("click", function () {
            $(this).parents(".navbar-right").find(".nav-item").show(500);
        });
    }

    //=================================
    // Click Scroll Action
    //=================================
    $(".nav-item li a").on("click", function (e) {
        $("li a").removeClass("active");
        $(this).addClass("active");
        var target = this.hash,
            $target = $(target);

        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top - 70,
                },
                100,
                "swing",
                function () {
                    window.location.hash = target;
                }
            );
    });

    /*********************************
    /*  Mixit-Up Code Here
    *********************************/
    if ($(".filter").length > 0) {
        mixitup(".filter");
    }

    /*********************************
    /* Portfolio Hover
    *********************************/
    $(".portfolio__items").each(function () {
        $(this)
            .on("mouseenter", function () {
                if ($(this).data("title")) {
                    $(".portfolio__visible__titles").html($(this).data("title") + '<span class="title__sub">' + $(this).data("category") + "</span>");
                    $(".portfolio__visible__titles").addClass("visible");
                }
                $(document).on("mousemove", function (e) {
                    $(".portfolio__visible__titles").css({ left: e.clientX - 10, top: e.clientY + 25 });
                });
            })
            .on("mouseleave", function () {
                $(".portfolio__visible__titles").removeClass("visible");
            });
    });

    /*********************************
    /* Cricle Skill Bar
    *********************************/
    var progressPie = $(".radial__progress__pie"); 
    if (progressPie.length) {
        progressPie.appear(function () {
            progressPie.asPieProgress({
                namespace: "pieProgress",
                classes: {
                    svg: "radial__progress__pie__svg",
                    number: "radial__progress__pie__number",
                    content: "radial__progress__pie__content",
                },
                min: 0,
                max: 100,
                speed: 50,
                barsize: "10",
                barcolor: "#4c7dfe",
                trackcolor: "#D7DBDD",
                easing: "ease",
            });
            progressPie.asPieProgress("start");
        });
    }

    /*********************************
    /*  Testimonial Slider Carousel
    *********************************/
    if ($(".test__single__slide").length > 0) {
        $(".test__single__slide").owlCarousel({
            loop: false,
            margin: 20,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    }
    /**********************************
     *  AOS animation
     **********************************/
    AOS.init();
})(jQuery);
