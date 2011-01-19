$(document).ready(function() {
  if (typeof($.fn.fancybox) != 'undefined')
    $("#features li div.image a").fancybox({ 'overlayOpacity': 0.7, 'overlayColor': '#222' });

  $('#accordion').accordion({
    collapsible: true,
    active: false,
    autoHeight: false
  });
});