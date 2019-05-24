function toggleNavbarMenu() {
  // Get the target from the "data-target" attribute
  const target = this.dataset.target;
  const $target = document.getElementById(target);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  this.classList.toggle('is-active');
  if (this.classList.contains('is-active')) {
    $target.classList.add('is-active');
    $target.classList.remove('is-inactive');
  } else {
    $target.classList.remove('is-active');
    $target.classList.add('is-inactive');
  }
}

const Section = {

  load: (section) => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(section.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', toggleNavbarMenu);
      });
    }
  },

  unload: (section) => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(section.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.removeEventListener('click', toggleNavbarMenu);
      });
    }
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
