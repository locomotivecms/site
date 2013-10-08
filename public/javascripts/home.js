$(function() {
  $('.home-row h1, #home-cred h1').each(function() {
    $(this).html('<span>' + $(this).text() + '</span>')
  })

  // BXSlider for Testimonials
  $('.bxslider').bxSlider({
    slideWidth: 295,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 20
  });

});
