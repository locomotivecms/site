export const enableYoutubeVideo = () => {
  // Do not load the lib twice
  if (typeof(YT) !== 'undefined') return;

  var tag = document.createElement('script')

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

export const createVideoPlayerWithId = (el, id, onPlayerReady, onPlayerStateChange) => {
  return new YT.Player(el, {
    videoId: id,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
