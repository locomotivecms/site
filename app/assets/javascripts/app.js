// === Wagon main javascript file ===

import $ from 'jquery';

// Tell Webpack to load the style
import '../stylesheets/app.scss';

// Set jQuery global
window.$ = window.jQuery = $;

// Import the classes required to handle sections
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

document.addEventListener('DOMContentLoaded', event => {

  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  sectionsManager.registerSection('services', Sections.Service);
  sectionsManager.registerSection('quotes', Sections.Quotes);
  sectionsManager.registerSection('features', Sections.Feature);
  sectionsManager.registerSection('clients', Sections.Client);
  sectionsManager.registerSection('hero', Sections.Hero);
  sectionsManager.registerSection('footer', Sections.Footer);
  sectionsManager.registerSection('header', Sections.Header);

  window.sectionsManager = sectionsManager;

  sectionsManager.start();

});
