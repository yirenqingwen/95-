import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '../Api/api.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(Antd);
Vue.use(ElementUI);
Vue.prototype.api=api
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
