import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Filter from "../views/Filter.vue";
import Description from "../views/Description.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter
  },
  {
    path: "/:camis",
    name: "Description",
    component: Description,
    props: true
  }
];

const router = new VueRouter({
  routes,
});

export default router;
