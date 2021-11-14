import { createApp } from "vue";
import store from "./store/index.js";
import router from "./route/index.js";
import App from "./App.vue";
import BaseBtn from "./components/BaseBtn.vue";
import Alert from "./components/Alert.vue";
import { io } from "socket.io-client";

const socket = io("http://localhost:3030");

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

const app = createApp(App);

app.component("base-btn", BaseBtn);
app.component("alert", Alert);
app.use(router);
app.use(store);

router.isReady().then(() => app.mount("#app"));
