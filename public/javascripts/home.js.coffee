$ ->

  $('#nav-toggle').on 'click', ->
    $('#main-nav').toggleClass 'expanded'
    $(this).toggleClass 'expanded'
  
  $('#home-tests .bxslider').bxSlider
    slideWidth: 295
    minSlides: 2
    maxSlides: 3
    slideMargin: 20
    
  $('#home-tests .bx-controls').hide()

  $('#want-to-hire').waypoint ->
    $('#form_wrap').addClass 'open' if !$('#form_wrap').hasClass('open')
  , { offset: '50%' }