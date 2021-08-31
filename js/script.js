$(document).ready(function(){
    $(".iframe-container").on("click", function(){
        $(this).children("iframe").addClass("active");
    });

    $(".iframe-container").on("mouseleave", function(){
        $(this).children("iframe").removeClass("active");
    });

    $(".icon-social").tooltip();

    var bannerHeight = $("#banner").outerHeight(true);
    $("#navbar").affix({
        offset: {
            top: bannerHeight
        }
    });

    $("navbar").on("affix.bs.affix", function(){
        $("#banner").css("margin-bottom", "52px");
    });
    
    $("#navbar").on("affix-top.bs.affix", function(){
        $("#banner").css("margin-bottom", "");
    });

    $("#navbar").on('click', 'a', function(event){
        event.preventDefault();
        if($(this).attr("href") != undefined) {
            var element = $($.attr(this, 'href'));
            if(element.length > 0) {
                $('html,body').animate({
                    scrollTop: element.offset().top - 90
                }, 500);
            }
        }
    });

    $(window).on('load',function() {
        $('.flexslider').flexslider({
          animation: "slide",
          animationLoop: true,
          slideshowSpeed: 3000,
          animationSpeed: 600,
          itemWidth: 300,
          itemMargin: 5
        });
      });

});