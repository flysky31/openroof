
$(document).ready(function() {

    // $(".easeScroll").easeScroll({
    //     animationTime: 0,
    //     speed:100,
    // });

 
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
    



// document.addEventListener('DOMContentLoaded', function() {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true, // 스무스 스크롤 사용 여부
//         //direction: 'vertical', // 스크롤 방향 (수직, 수평)
//         // 추가 옵션 설정 가능
//       });
    
//   });
// element.addEventListener('scroll', yourScrollHandler, { passive: true });






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


