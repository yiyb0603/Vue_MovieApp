import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Status from './Status';

// Vue.component('AppStatus', Status); 모든 vue 파일에서 import를 안해도 쓸 수 있음. (AppStatus 라는 이름으로 Status 컴포넌트 호출)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
