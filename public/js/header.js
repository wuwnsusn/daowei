/**
 * Created by a on 2017/8/10.
 */
// $('.header').on('mousewheel',function () {
//   if($('.header')[0].clientX < -$('.header').outerHeight()){
//     $('.header').css({'position':'fixed','transition':'.5s'})
//   }
// })
$(window).scroll( function(event) {
  // console.log($(document).scrollTop(),$('.header').height());
  if($(document).scrollTop() >= $('.header').height()){
    $('.header').addClass('header-flxed')
  }else {
    $('.header').removeClass('header-flxed')
  }
});
