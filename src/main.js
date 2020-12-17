import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import Vue from "vue";
// Vue.prototype.$axios = axios;
import "./assets/css/global.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
