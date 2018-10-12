$(document).ready(function() {

              // ------------------- TIME FUNCTION ------------------------

              $(function() {
        
                setInterval( function() {
                var hours = new Date().getHours();
                var mins = new Date().getMinutes();
                var hdegree = hours * 30 + (mins / 2);
                var hrotate = "rotate(" + hdegree + "deg)";
    
                var london = (hours - 1) * 30 + (mins / 2);
                var londonTime = "rotate(" + london + "deg)";
    
                var newyork = (hours - 6) * 30 + (mins / 2);
                var newyourTime = "rotate(" + newyork + "deg)";
    
                var toronto = (hours - 6) * 30 + (mins / 2);
                var torontoTime = "rotate(" + toronto + "deg)";
    
                var hongkong = (hours + 6) * 30 + (mins / 2);
                var hongkongTime = "rotate(" + hongkong + "deg)";
    
                var bukurest = (hours + 1) * 30 + (mins / 2);
                var bukurestTime = "rotate(" + bukurest + "deg)";
                console.log(london);
                
                $(".newyork").css({ "transform": newyourTime});
                $(".london").css({ "transform": londonTime});
                $(".toronto").css({ "transform": torontoTime});
                $(".hongkong").css({ "transform": hongkongTime});
                $(".skopje").css({ "transform": hrotate});
                $(".bukurest").css({ "transform": bukurestTime});
                    
                }, 500);
          
                setInterval( function() {
                var mins = new Date().getMinutes();
                var mdegree = mins * 6;
                var mrotate = "rotate(" + mdegree + "deg)";
                
                $(".time__box__clock__min").css({ "transform" : mrotate });
                    
                }, 500 );
           
          });
});