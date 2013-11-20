$(function() {
  // $("ul.tabs").tabs(".panes > section");

  $('.home-row h1').each(function(index) {
    $el = $(this)
    $el.html('<span>' + $el.text() + '</span>')
  })

  $('#home-cred h1').each(function(index) {
    $el = $(this)
    $el.html('<span>' + $el.text() + '</span>')
  })

  // mobile
  $('#nav-toggle').on('click',function(e){
    $('#main-nav').toggleClass('expanded');
    $(this).toggleClass('expanded');
  });

  // BXSlider for Testimonials
  $('#home-tests .bxslider').bxSlider({
    slideWidth: 295,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 20
  });

  $('#home-tests .bx-controls').hide();

});
