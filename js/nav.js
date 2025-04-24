
$(document).ready(function() {
    let $header = $("#header");

    $(window).scroll(function(){
      if( $(window).scrollTop() > 50){
          $header.addClass("on");
      
      } else {
          $header.removeClass("on");

      }

     
    });
    


    
    $(".navbar-toggler").click(function(){
        $("#aside").toggleClass("on");
        $(".aside_bg").toggleClass("on");
        $(this).toggleClass("on");

        function toggleClassBasedOnScreenSize() {

        if ($(window).width() > 1024) { 
            $("#aside").removeClass("on");
            $(".aside_bg").removeClass("on");
            $(".navbar-toggler").removeClass("on");
            $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
          } else {
          
          }
        }
        toggleClassBasedOnScreenSize();

        $(window).resize(function() {
            toggleClassBasedOnScreenSize();
        });

     
    });
    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    });


    // $("#aside .navbar-nav_m li .sub").hide();
    $("#aside .navbar-nav_m li").click(function(){
        $(this).toggleClass("on");
        //$(this).find(".sub").slideDown();
        $('#aside .navbar-nav_m li').not(this).removeClass('on');        
        let subElement = $(this).find(".sub");

        if (subElement.is(":visible")) {
          subElement.slideUp();
        } else {
          $("#aside .navbar-nav_m li .sub").slideUp();
          subElement.slideDown();
        }
    });

    $('.nav-item').mouseenter(function(){
      //$(this).find('.sub_menu').stop().slideDown();
      $(this).addClass("on");
      $(this).find('.sub_menu').addClass("on");
    });
    $('.nav-item').mouseleave(function(){
        //$(this).find('.sub_menu').stop().slideUp();
        $(this).removeClass("on");
        $(this).find('.sub_menu').removeClass("on");
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#toTopButton').addClass("on");
        } else {
            $('#toTopButton').removeClass("on");
        }
    });

    // Scroll to the top of the page when the "top" button is clicked
    $('#toTopButton').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});


