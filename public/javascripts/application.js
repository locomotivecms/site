$(document).ready(function() {
  if (typeof($.fn.fancybox) != 'undefined')
    $(".feature div.image a").fancybox({ 'overlayOpacity': 0.7, 'overlayColor': '#222' });
});