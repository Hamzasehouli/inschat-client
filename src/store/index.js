import { createStore } from "vuex";
import messenger from "./messenger/index";
export default store = createStore({
  modules: { messenger },
  state() {
    return {};
  },
});
