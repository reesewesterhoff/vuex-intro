import Vue from 'vue'
import App from './App.vue'
// import store
import { store } from './store/store';

new Vue({
  // globally be able to use store
  store: store,
  el: '#app',
  render: h => h(App)
})
