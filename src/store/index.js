import { createStore } from "vuex";
import { guid } from "../utils";

export default createStore({
  state: {
    accounts: {},
  },
  mutations: {
    ADD_ACCOUNT(state, payload) {
      let id = guid();
      state.accounts[id] = Object.assign({ id: id }, payload.account);
    },
  },
  actions: {
    addAccount({ commit }, data) {
      commit("ADD_ACCOUNT", { account: data });
    },
  },
  modules: {},
});
