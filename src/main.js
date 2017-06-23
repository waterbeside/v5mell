// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import App from './App'
import router from './setting/router'
import store from './setting/store'
import onScroll from './directives/onScroll'

Vue.config.productionTip = false

Vue.prototype.$ajax = axios;

Vue.directive('onScroll', onScroll);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
