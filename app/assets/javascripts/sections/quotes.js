import 'slick-carousel';

const Section = {

  load: (section) => {
    $('.quote-list', section).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      fade: true,
      dots: true,
      arrows: false
    })
  },

  unload: (section) => {
    $('.quote-list', section).slick('unslick')
  },

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
