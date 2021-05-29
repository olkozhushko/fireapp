import Vue from 'vue';
import App from './App.vue';
import './plugins/firebase';

import AppInput from './components/AppInput.vue';

Vue.component('AppInput', AppInput);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
