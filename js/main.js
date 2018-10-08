$(document).ready(function(){

    // ------------ NAV BAR --------------------
var stickyNav = $(".nav").offset().top;
$(window).scroll(function(){
    if( $(window).scrollTop() > stickyNav) {
        $(".nav").css({ position : "fixed", top: "0px", backgroundColor: "#fff"});
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
    slider();

    function slider() {

        var slides = document.getElementsByClassName("carousel__box");
        var slidesMini = document.getElementsByClassName("carousel__secondary-2");
        var lines = document.getElementsByClassName("carousel__text__list__item__1");

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

        // LINE LOADER

        for (j = 0; j < lines.length; j++) {
            console.log(lines);
            if(lines[j].classList.contains("active")) {
                lines[j].classList.remove("active");
            } 
        }
        indexLine++;
        if(indexLine > lines.length) {indexLine = 1}
        lines[indexLine - 1].classList.add("active");

        slides[index-1].style.display = "block";
        slides[index-1].style.backgroundImage = `url("../img/bg-home-${index}.jpg")`;

        slidesMini[indexMini-1].style.display = "block";
        slidesMini[indexMini-1].style.backgroundImage = `url("../img/bg2-home-${indexMini}.png")`;
       
        setTimeout(slider, 4000);
    }

});
