// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default';
import Examples from '~/templates/Examples';
import ExamplesPage from '~/page-components/Examples';
import FrontendMentorChallengesPage from '~/page-components/Examples/FrontendMentorChallenges';
import '~/assets/scss/styles.scss';

export default function(Vue, { head, router }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add routes with breadcrumbs
  router.addRoutes([
    {
      path: '/examples/',
      component: Examples,
      meta: {
        breadcrumbText: 'Examples'
      },
      children: [
        {
          path: '',
          component: ExamplesPage,
        },
        {
          path: 'fm',
          component: FrontendMentorChallengesPage,
          meta: {
            breadcrumbText: 'Frontend Mentor Challenges'
          },
        },
      ],
    },
  ]);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
  });

  head.meta.push({
    name: 'description',
    content:
      'Art oriented full stack designer located in Riga with passion for music, solo traveling, coffee, spirituality, self awareness and discovery',
  });
}
