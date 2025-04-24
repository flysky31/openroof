
$(document).ready(function() {

 
    //제품소개
    let gallery_slider = new Swiper(".gallery_slider", {
        slidesPerView:1,
        spaceBetween: 50,
        centeredSlides: true,
        loop:true,
        
        navigation: {
            nextEl: ".arrow .swiper-button-next",
            prevEl: ".arrow .swiper-button-prev",
        },
        breakpoints: {
    
            1280: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
              }
        },
    });

    $('#myVideo3').click(function() {
        this.play();
    });
    //Scrollbar.initAll(); 
   
});
    




function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){
    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});


