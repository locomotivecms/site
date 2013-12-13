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
    if $('#form_wrap').hasClass('never_open')
      $('#form_wrap').addClass 'open'
      $('#form_wrap').removeClass 'never_open' 
  , { offset: '50%' }
  
  
  $('#form_wrap form').on 'submit', (e) ->
    e.preventDefault()
    console.log 'test'
    $('#form_wrap .errors_container').html('')
    $('#form_wrap .errors_container').hide()
    $.ajax
      type: "POST"
      url:  $(this).attr('action')
      data: $(this).serialize()
      dataType: "json"
      success: (data) ->
        $('#form_wrap .success_container').fadeIn()
        $('#form_wrap').removeClass 'open'  
      error: (xhr) ->
        errors = JSON.parse(xhr.responseText)['errors']
        delete errors._slug
        for field, value of errors
          $('#form_wrap .errors_container').fadeIn()
          $('#form_wrap .errors_container').append("<div class='error'>#{field.slice(0,1).toUpperCase() + field.slice(1)} #{value}</div>")
