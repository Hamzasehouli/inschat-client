export default {
  setIsLoggedin(state, payload) {
    console.log(payload, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    state.isLoggedin = payload;
  },
};
