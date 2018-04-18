import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home";
import Jedi from "./components/Jedi";
import Catch from "./components/Catch";
import Details from "./components/Details";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/jedi",
      name: "jedi",
      component: Jedi
    },
    {
      path: "/details/:name",
      name: "details",
      component: Details
    },
    {
      path: "*",
      name: "404",
      component: Catch
    }
  ]
});

export default router;
