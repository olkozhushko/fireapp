import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/users',
      component: () => import('@/pages/Users.vue'),
    },
    {
      path: '/cards',
      component: () => import('@/pages/Cards.vue'),
    },
  ],
});
