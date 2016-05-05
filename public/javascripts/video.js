$(function(){
  // Load YouTube player
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Play videos
  $('.video-click').on('click', function(e) {
    e.preventDefault();

    var $this = $(this);
    var videoId = $this.data('video-id');

    function onPlayerReady(event) {
      event.target.playVideo();
    }

    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.ENDED) {
        $this.show();
      }
    }

    var player = createVideoPlayerWithId(
      $this.next('.video-iframe').get(0),
      videoId,
      onPlayerReady,
      onPlayerStateChange
    );

    $this.hide();
  });

  function createVideoPlayerWithId(el, id, onPlayerReady, onPlayerStateChange) {
    return new YT.Player(el, {
      videoId: id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
});
