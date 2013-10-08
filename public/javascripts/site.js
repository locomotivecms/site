$(function() {
  // mobile
  $('#nav-toggle').on('click',function(e){
    $(this).add('#main-nav').toggleClass('expanded');
  });
});