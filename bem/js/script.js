$('.btn').click(() => {
  $('html, body').animate({
      scrollTop: $('.portfolio').offset().top
  }, 600);
});
$('.header__arrow').click(() => {
  $('html, body').animate({
      scrollTop: $('.portfolio').offset().top
  }, 600);
});

// $(window).resize(function(event){
//     header();
// });

// function header() {
//     var h = $(window).outerHeight();
//     $('.header').css('min-height', h);
// }
// header();

