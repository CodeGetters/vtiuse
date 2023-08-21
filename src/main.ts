import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { i18n } from "@/i18n/index";

import "virtual:uno.css";

const app = createApp(App);
app.use(i18n);
app.use(router);

app.mount("#app");
