// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default';
import '~/assets/scss/styles.scss';

export default function(Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Montserrat:wght@400;700&display=swap',
  });
}
