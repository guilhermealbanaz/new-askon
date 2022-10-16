import Vue from "vue";
import VueCarousel from 'vue-carousel';
import Vue2Filters from 'vue2-filters';
import App from "./App.vue";
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueRellax from 'vue-rellax';
import vuetify from './plugins/vuetify'
import store from './store'
import './plugins/axios'

Vue.config.productionTip = false;
Vue.use(VueRellax)
Vue.use(Vue2Filters)
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  
  

  mounted(){
    AOS.init()
  }
}).$mount("#app");
