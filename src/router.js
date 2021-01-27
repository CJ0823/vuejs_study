import Vue from "vue";
import VueRouter from 'vue-router';
import Home from "./views/Home"
import About from "./views/About"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    // 기본 path일때는 Home 컴포넌트를 로딩하겠다.
    { path: "/", name: 'home', component: Home },
    { path: "/about", name: 'about', component: About }
  ]
})

export default router