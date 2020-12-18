// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "192.168.0.248";
// createApp.config.productionTip = false;
import "./assets/css/global.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

// createApp(App)
//   .use(store)
//   .use(router)
//   .mount("#app");
