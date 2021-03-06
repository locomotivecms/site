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
  sectionsManager.registerSection('long_text', Sections.LongText);
  sectionsManager.registerSection('faq', Sections.Faq);
  sectionsManager.registerSection('icon_features', Sections.IconFeature);
  sectionsManager.registerSection('pricing', Sections.Pricing);
  sectionsManager.registerSection('testimonial_transcript', Sections.TestimonialTranscript);
  sectionsManager.registerSection('testimonials', Sections.Testimonials);
  sectionsManager.registerSection('simple_call_to_action', Sections.SimpleCallToAction);
  sectionsManager.registerSection('tabbed_features', Sections.TabbedFeature);
  sectionsManager.registerSection('detailed_features', Sections.DetailedFeature);
  sectionsManager.registerSection('simple_hero', Sections.SimpleHero);
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
