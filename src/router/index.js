import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Terms from "../pages/Terms.vue";
import PrivacyPolicy from "../pages/PrivacyPolicy.vue";
import CookieNotice from "../pages/CookieNotice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
  {
    path: "/cookie-notice",
    name: "CookieNotice",
    component: CookieNotice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top with smooth behavior
    return new Promise((resolve) => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        resolve();
      }, 100); // delay to ensure transition has started
    });
  },
});

export default router;
