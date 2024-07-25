import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueTyped from "vue3-typed-js";
import router from "./router";

const app = createApp(App);
app.use(VueTyped);
app.use(router);
app.mount("#app");
