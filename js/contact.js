$(document).ready(function () {

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
        if ($(".contact__header").isFullyInViewport()) {
        $(".contact__header").addClass("starting");
        } else {
        $(".contact__header").removeClass("starting");
        }
    });

    $(window).on('resize scroll', function() {
        if ($(".contact__container").isFullyInViewport()) {
            $(".contact__container").addClass("starting");
        } else {
            $(".contact__container").removeClass("starting");
        }
        });


    // ------------------------ BOXES BG FUNCTION ---------------------------

    $(".location__container__box").mouseover(function () {
        var index = $(this).index() + 1;
        console.log(index);

        $(this).css({
            "background-image": `url(/img/tile-${index}.jpg)`,
            "color": "#fff",

        });
        $(this).children(".location__container__box__pin").attr("src", "/img/pin-white.png");
    });

    $(".location__container__box").mouseleave(function () {
        
        $(this).css({
            "background-image": "none",
            "color": "black",
        });

        $(this).children(".location__container__box__info").css("color", "#fff");

        $(this).children(".location__container__box__pin").attr("src", "/img/pin-black.png");
        
    });




});