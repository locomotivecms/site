$(function() {
  // $("ul.tabs").tabs(".panes > section");

  // mobile
  $('#nav-toggle').on('click',function(e){
    $('#main-nav').toggleClass('expanded');
    $(this).toggleClass('expanded');
  });

});