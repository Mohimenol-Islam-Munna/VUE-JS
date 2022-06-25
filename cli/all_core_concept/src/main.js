import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import Developer from "../src/components/Developer.vue";
import Cricketer from "../src/components/Cricketer.vue";
import Footballer from "../src/components/Footballer.vue";
import Contact from "../src/components/Contact.vue";
import About from "../src/components/About.vue";

const routes = [
  {
    path: "/developer/:type",
    component: Developer,
  },
  {
    path: "/cricketer",
    component: Cricketer,
  },
  {
    path: "/footballer",
    component: Footballer,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
