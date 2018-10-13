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

    //  ---------------------------- PLUS MINUS FUNCTION -------------------------
   
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

        $(window).on('resize scroll', function() {
            if ($(".imgright1").isFullyInViewport()) {
                $(".imgright1").addClass("starting");
            } else {
                $(".imgright1").removeClass("starting");
            }
        });

        $(window).on('resize scroll', function() {
            if ($(".imgright2").isFullyInViewport()) {
                $(".imgright2").addClass("starting");
            } else {
                $(".imgright2").removeClass("starting");
            }
        });

        $(window).on('resize scroll', function() {
            if ($(".imgright3").isFullyInViewport()) {
                $(".imgright3").addClass("starting");
            } else {
                $(".imgright3").removeClass("starting");
            }
        });

        $(window).on('resize scroll', function() {
            if ($(".imgright4").isFullyInViewport()) {
                $(".imgright4").addClass("starting");
            } else {
                $(".imgright4").removeClass("starting");
            }
        });



        // ------------------------------ BOX ZOOM --------------------------------

        $(".feature__box__table__bronze").mouseover(function() {
            $(this).addClass("active");
        });

        $(".feature__box__table__bronze").mouseleave(function() {
            $(this).removeClass("active");
        });


        // -------------------- Scroll Down Anchor -------------------------

        $(".bg__box__arrowbox").on("click", function (){
            $("html, body").animate({
                scrollTop: $(".stick").offset().top - ( $(".bg__box__arrowbox").outerHeight( true ) + $(".nav").innerHeight() -10 ) }, "slow");
        });

    

        
        //  ------------------ STICKY STICK SECTION -------------------------


        var stick = $(".stick").offset().top - ( $(".bg__box__arrowbox").outerHeight( true ) + $(".nav").innerHeight() -10 );
        console.log(stick);

        $(window).scroll(function(){
            if($(window).scrollTop() > stick) {
                $(".stick").addClass("sticky");
            } else {
                $(".stick").removeClass("sticky");
            }
        });


        //  --------------------------- STICKY MENY ON CLICK ---------------------------

        $(".stick__dropdown").on("click", function () {
            $(".stick__box").toggleClass("active");
        });

        $(".feature__box__table__bronze__dropdown").on("click", function () {
            $(this).siblings(".feature__box__table__bronze__plus").toggleClass("active");
        });

});