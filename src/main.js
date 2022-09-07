import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRellax from 'vue-rellax'

Vue.config.productionTip = false;
Vue.use(VueRellax)

new Vue({
  router,
  render: (h) => h(App),
  mounted(){
    AOS.init()
  },
}).$mount("#app");
