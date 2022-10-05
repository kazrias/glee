$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  var mixerOne = mixitup('.products__content', {
    controls:{
      scope:'local'
    },
    animation: {
      animateResizeTargets:true,
      animateResizeContainer: false,
        reverseOut: true,
        nudge: false ,// Disable nudging to create a carousel-like effect
        clampHeight: false,
    }
  });
  var mixerTwo = mixitup('.design__content', {
    controls:{
      scope:'local'
    },
    animation: {
      animateResizeTargets:true,
      animateResizeContainer: false,
        reverseOut: true,
        nudge: false ,// Disable nudging to create a carousel-like effect
        clampHeight: false,
    }
  });
});
