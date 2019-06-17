import { enableYoutubeVideo, createVideoPlayerWithId } from '../video'

const Section = {

  load: (section) => {
    // Init the YT Player (just once)
    enableYoutubeVideo()

    // Play the video
    $('.testimonial-video-click', section).on('click', event => {
      event.preventDefault()

      var $this = $(event.target).closest('.testimonial-video-click');
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
        $this.next('.testimonial-video-iframe').get(0),
        videoId,
        onPlayerReady,
        onPlayerStateChange
      );

      $this.hide();
    })
  },

  // unload: (section) => {
  // },

  // select: (section) => {
  // },

  // deselect: (section) => {
  // },

  // reorder: (section) => {
  // },

  // blockSelect: (section, block) => {
  // },

  // blockDeSelect: (section, block) => {
  // }

}

export default Section;
