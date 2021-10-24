import { createApp } from "vue";
import store from "./store/index.js";
import router from "./route/index.js";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(store);

router.isReady().then(() => app.mount("#app"));
