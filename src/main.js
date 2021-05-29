import Vue from 'vue';
import App from './App.vue';
import './plugins/firebase';

import AppInput from './components/AppInput.vue';
import router from './router.js';

Vue.component('AppInput', AppInput);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
