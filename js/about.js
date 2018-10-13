$(document).ready(function() {

    // ------------ NAV BAR --------------------
    var stickyNav = $(".nav").offset().top;
    console.log(stickyNav);
    $(window).scroll(function(){
        if( $(window).scrollTop() > stickyNav) {
            $(".nav").addClass("sticky");
            $(".nav__box__item__link").css({"color": "#292929"});
            $(".nav__box__svg__logo__pic").attr("src", "/img/svg/logo-full.svg");
        } else {
            $(".nav").removeClass("sticky");
            $(".nav__box__item__link").css({"color": "#fff"});
            $(".nav__box__svg__logo__pic").attr("src", "/img/svg/logo-glyph-white.svg");
        }
    });


    // ----- IS ELEMENT IN VIEW ----------

    $.fn.isFullyInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        // console.log($(window).height())
        // console.log(elementTop)
        // console.log(elementBottom)
        // console.log(viewportTop)
        // console.log(viewportBottom)

        return elementTop >= viewportTop && elementBottom <= viewportBottom;
        };

        //   ----------- WHAT TO DO WHEN ELEMENT IS IN VIEW ---------------
        $(window).on('resize scroll', function() {
            if ($(".managment__top__line").isFullyInViewport()) {
            $(".managment__top__line").addClass("starting");
            } else {
            $(".managment__top__line").removeClass("starting");
            }
        });


        
        $(window).on('resize scroll', function() {
            if ($(".global__box__header").isFullyInViewport()) {
                $(".global__box__header").addClass("starting");
            } else {
                $(".global__box__header").removeClass("starting");
            }
        });

        $(window).on('resize scroll', function() {
            if ($(".global__box__buttons").isFullyInViewport()) {
                $(".global__box__buttons").addClass("starting");
            } else {
                $(".global__box__buttons").removeClass("starting");
            }
        });


        // ------------------- PLUS MINUS FUNCTON --------------------------------

        $(".reusable__textleft__box__top").on("click", function (){
            console.log($(this))
            if($(this).siblings(".reusable__textleft__box__bottom").is(":visible")) {
                $(this).siblings(".reusable__textleft__box__bottom").slideUp();
                $(this).children(".reusable__textleft__box__top__icon").attr("src", "/img/plus.png");
            } else {
            $(this).parent("div").children(".reusable__textleft__box__bottom").slideDown();
            $(".reusable__textleft__box__top").not(this).siblings(".reusable__textleft__box__bottom").slideUp();
            $(this).children(".reusable__textleft__box__top__icon").attr("src", "/img/minus.png");
            }
        });



        // -------------------- Scroll Down Anchor -------------------------

        $(".bg__box__arrowbox").on("click", function (){
            $("html, body").animate({
                scrollTop: $(".managment__bottom").offset().top - $(".nav").outerHeight() -100 }, "slow");
        });

        
});