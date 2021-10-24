import { createStore } from "vuex";
import messenger from "./messenger/index";
export default createStore({
  modules: { messenger },
  state() {
    return {};
  },
});
