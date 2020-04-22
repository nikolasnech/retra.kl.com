// $(function() {
//   var offset = $ ("#sidebar").offset();
//   var topPadding = 15;
//   $(window) .scroll(function() {
   
//    if ( $ (window) .scrollTop() > offset.top) {
//    $("#sidebar") .stop() .animate({
//    marginTop: $(window) .scrollTop() - offset.top + topPadding

//    });
//    } else {
//     $("#sidebar") .stop() .animate({

//     });
    
//    }   

//   });

// });


$(document).ready(function () {
    $('#image').click(function () {
       var img = $(this);
       var src = img.attr('src');
       $("body").append("<div id='popup'>"+
         "<div id='popup_bg'></div>"+ 
         "<img src='"+src+"' id='popup_img' />"+"</div>");
       $("#popup").fadeIn(800);
       $("#popup_bg").click(function() {
         $("#popup").fadeOut(800);
         setTimeout(function() {
           $("#popup").remove(); 
         }, 800);
       }); 
         
    });

});

$(document).ready(function () {
    $('#image2').click(function () {
       var img = $(this);
       var src = img.attr('src');
       $("body").append("<div id='popup2'>"+
         "<div id='popup_bg_2'></div>"+ 
         "<img src='"+src+"' id='popup_img_2' />"+"</div>");
       $("#popup2").fadeIn(800);
       $("#popup_bg_2").click(function() {
         $("#popup2").fadeOut(800);
         setTimeout(function() {
           $("#popup2").remove(); 
         }, 800);
       }); 
         
    });

});

$(document).ready(function () {
    $('#image3').click(function () {
       var img = $(this);
       var src = img.attr('src');
       $("body").append("<div id='popup3'>"+
         "<div id='popup_bg_3'></div>"+ 
         "<img src='"+src+"' id='popup_img_3' />"+"</div>");
       $("#popup3").fadeIn(800);
       $("#popup_bg_3").click(function() {
         $("#popup3").fadeOut(800);
         setTimeout(function() {
           $("#popup3").remove(); 
         }, 800);
       }); 
         
    });

});

