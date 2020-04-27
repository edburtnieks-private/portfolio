// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '../vendor/css/prism-vsc-dark-plus.css';

import DefaultLayout from '~/layouts/Default';
import Container from '~/containers/Container';
import '~/assets/scss/styles.scss';

export default function(Vue, { head, router }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Container', Container);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
  });
}
