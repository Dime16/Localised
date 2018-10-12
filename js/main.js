$(document).ready(function(){

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



///  ------------- CHECKBOX MENU ------------------

    $(".nav__label").on("click", function() {
        if ($(".nav__checkbox").prop('checked')) {
            $(".nav__box__list").removeClass("active-1");
            $("body").removeClass("color-1");
        } else {
         
            $(".nav__box__list").addClass("active-1");
            $("body").addClass("color-1");
        }
    });

    // ------------- SLIDER ------------
    var index = 0;
    var indexMini = 0;
    var indexLine = 0;
    var textLine = 0;
    slider();

    function slider() {

        var slides = document.getElementsByClassName("carousel__box");
        var slidesMini = document.getElementsByClassName("carousel__secondary-2");
        var lines = document.getElementsByClassName("carousel__text__list__item__1");
        var textItem = document.getElementsByClassName("carousel__text__list__item");

        // BIG SLIDER
        for (i=0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        index++;
        if(index > slides.length) { index = 1}

        //   SMALL SLIDER

        for (i=0; i < slidesMini.length; i++) {
            slidesMini[i].style.display = "none";
        }
        indexMini++;
        if(indexMini > slidesMini.length) { indexMini = 1}

        // LINE LOADER - TEXT

        for (e = 0; e < textItem.length; e++) {
            textItem[e].classList.remove("red");
        }
        textLine++;
        if(textLine > textItem.length) {textLine = 1}
        textItem[textLine - 1].classList.add("red");

        // LINE LOADER - LINE

        for (j = 0; j < lines.length; j++) {
            lines[j].classList.remove("active");
        }
        indexLine++;
        if(indexLine > lines.length + 1) {indexLine = 1}
        if(indexLine == 4) {} else {
            lines[indexLine - 1].classList.add("active");
        }
 
        slides[index-1].style.display = "block";
        slides[index-1].style.backgroundImage = `url("../img/bg-home-${index}.jpg")`;

        slidesMini[indexMini-1].style.display = "block";
        slidesMini[indexMini-1].style.backgroundImage = `url("../img/bg2-home-${indexMini}.png")`;
       
        setTimeout(slider, 4000);
    }

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
                if ($(".content__row__left__text").isFullyInViewport()) {
                $(".content__row__left__text").addClass("starting");
                } else {
                $(".content__row__left__text").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".content__row__right__text").isFullyInViewport()) {
                    $(".content__row__right__text").addClass("starting");
                } else {
                    $(".content__row__right__text").removeClass("starting");
                }
                });

            $(window).on('resize scroll', function() {
            if ($(".content__row__right__btn").isFullyInViewport()) {
                $(".content__row__right__btn").addClass("starting");
            } else {
                $(".content__row__right__btn").removeClass("starting");
            }
            });

            $(window).on('resize scroll', function() {
                if ($(".laptop__text__big").isFullyInViewport()) {
                    $(".laptop__text__big").addClass("starting");
                } else {
                    $(".laptop__text__big").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".laptop__text__small").isFullyInViewport()) {
                    $(".laptop__text__small").addClass("starting");
                } else {
                    $(".laptop__text__small").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".animate__right__text__box__line").isFullyInViewport()) {
                    $(".animate__right__text__box__line").addClass("starting");
                } else {
                    $(".animate__right__text__box__line").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".animate__right__text__big").isFullyInViewport()) {
                    $(".animate__right__text__big").addClass("starting");
                } else {
                    $(".animate__right__text__big").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".animate__right__text__small").isFullyInViewport()) {
                    $(".animate__right__text__small").addClass("starting");
                } else {
                    $(".animate__right__text__small").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".animate__right__text__box__icon").isFullyInViewport()) {
                    $(".animate__right__text__box__icon").addClass("starting");
                } else {
                    $(".animate__right__text__box__icon").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".market__left__text").isFullyInViewport()) {
                    $(".market__left__text").addClass("starting");
                } else {
                    $(".market__left__text").removeClass("starting");
                }
            });

            $(window).on('resize scroll', function() {
                if ($(".market__right__box").isFullyInViewport()) {
                    $(".market__right__box").addClass("starting");
                } else {
                    $(".market__right__box").removeClass("starting");
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

            $(window).on('resize scroll', function() {
                if ($(".reusable__imgright").isFullyInViewport()) {
                    $(".reusable__imgright").addClass("starting");
                } else {
                    $(".reusable__imgright").removeClass("starting");
                }
            });
            //  ------------ CHANGING THE BACKGROUND IMAGES OF BOXES ------------------


            $(".boxes__container__1").each(function(index){
                $(this).mouseover(function(){
                    $(this).css({"backgroundImage": `url(/img/background_item${index +1}.jpg)`
                    });
                    $(this).children("div").children("p").css({"visibility": "visible"});
                    $(this).children("img").css({"visibility" : "visible"});
                });

                $(this).mouseleave(function(){
                    $(this).css({"backgroundImage": `none`});
                    $(this).children("img").css({"visibility" : "hidden"});
                    $(this).children("div").children("p").css({"visibility": "hidden"});
                });
            });

            $(".boxes__container__1__2").mouseover (function () {
                $(this).addClass("white");
                $(this).children("p").css({"color" : "#fff", "visibility": "visible" });

            });

            $(".boxes__container__1__2").mouseleave (function () {
                $(this).removeClass("white");
                $(this).children("p").css({"color" : "#292929", "visibility": "visible" });

            });


        //  ------------- IMAGE SCROLL ----------------------
            var z = 20;
        $(".animate__left__arrowbot").unbind("click").on("click", function(){
            if (z >= 0 && z <= 180) {
                z = z + 20;
                if(z <= 200 ) {
                $(".animate__left__box__img__full").css({
                    "transform": `translateY(-${z}rem)`
                })
            } else if (z > 200) { z = z + 0}

            }

        })

        $(".animate__left__arrowtop").unbind("click").on("click", function(){
            if (z >= 20 && z <= 200) {
                    z = z - 20;
                if(z >= 0 ) {
                    $(".animate__left__box__img__full").css({
                        "transform": `translateY(-${z}rem)`
                    });
                }
            }
        });


        // ----------------- BUTTON IMAGE CHANGE -------------------
          
        $(".animate__right__text__buttons__btn-1").on("click", function(){
            $(".animate__left__box__img__full").attr("src", "/img/window-image.jpg");
        });

        $(".animate__right__text__buttons__btn-2").on("click", function(){
            $(".animate__left__box__img__full").attr("src", "/img/window-image-2.jpg");
        });


});
