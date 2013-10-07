$(function() {
  // mobile
  $('#nav-toggle').on('click',function(e){
    $(this).$('#main-nav').toggleClass('expanded');
  });
});