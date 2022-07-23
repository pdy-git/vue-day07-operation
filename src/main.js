import Vue from "vue";
import App from "./App.vue";
// 引入组件
import MyHome from "./views/MyHome.vue";
import MyClass from "./views/MYClass.vue";
import MyIndext from "./views/MyIndext.vue";
import MyLogin from "./views/MyLogin.vue";

Vue.config.productionTip = false;

//引入
import VueRouter from "vue-router";
//全局注册
Vue.use(VueRouter);
//创建路由规则
const routes = [
  {
    path: "/home",
    component: MyHome,
  },
  {
    path: "/class",
    component: MyClass,
  },
  {
    path: "/indext",
    component: MyIndext,
  },
  {
    path: "/my",
    component: MyLogin,
  },
];
//生成路由对象
const route = new VueRouter({
  routes,
});
new Vue({
  //关联vue实例
  router: route,
  render: (h) => h(App),
}).$mount("#app");
