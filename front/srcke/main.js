import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueRouter)

const app = new Vue({
  router,
  store,
  mounted() {
    this.$toastr.defaultPosition = "toast-bottom-right"
  },
  render: (h) => h(App)
}).$mount('#app')
