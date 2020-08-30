import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import Messenger from "./views/Messenger"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      props: true,
      component: Home
    },
    {
      path: "/messenger",
      name: "messenger",
      props: true,
      component: Messenger
    }
  ]
})
