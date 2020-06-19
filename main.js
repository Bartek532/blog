import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/routes";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter("tooLong", function (val) {
  return val.slice(0, 150) + "...";
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");