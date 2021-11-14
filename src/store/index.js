import { createStore } from "vuex";
import messenger from "./messenger/index";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
export default createStore({
  modules: { messenger },
  state() {
    return {
      message: "",
    };
  },
  actions,
  getters,
  mutations,
});
