const Section = {

  load: (section) => {
    $('.feature-tab-links a', section).click(event => {
      const $tab = $(event.target).closest('a')
      const $tabPane = $(`.feature-tab-pane${$tab.attr('href')}`, section)

      $('.feature-tab-links a.is-active').removeClass('is-active')
      $('.feature-tab-pane.is-active').removeClass('is-active')

      $tab.addClass('is-active')
      $tabPane.addClass('is-active')

      event.preventDefault() & event.stopPropagation()
    })
  },

  unload: (section) => {
    // TODO: un-register the click events
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
