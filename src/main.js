import Vue from "vue";
import App from "./App.vue";

import homepage from "./views/homePage.vue";
import keepsports from "./views/keepSports.vue";
import message from "./views/messAge.vue";

import keepH from "./components/keepHome.vue";
import keepC from "./components/KeepChina.vue";
import keepA from "./components/KeepAmerica.vue";

Vue.config.productionTip = false;

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/homepage",
    component: homepage,
  },
  {
    path: "/keepsports",
    component: keepsports,
    children: [
      {
        path: "/",
        redirect: "/keepsports/keepH",
      },
      {
        path: "keepH",
        component: keepH,
      },
      {
        path: "keepC",
        component: keepC,
      },
      {
        path: "keepA",
        component: keepA,
      },
    ],
  },
  {
    path: "/message",
    component: message,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
