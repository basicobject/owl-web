import Vue from "vue"
import Vuex from "vuex"
import ws from "../websocket"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    wsUrl: "ws://127.0.0.1:1338/affirm",
    nickname: "you",
    users: [],
    messages: []
  },
  getters: {
    nickname: (state) => { return state.nickname },
    users: (state) => { return state.users },
    messages: (state) => { return state.messages }
  },
  mutations: {
    setNickname: (state, value) => state.nickname = value,
    addUser: (state, user) => state.users.push(user),
    newMessage: (state, message) => state.messages.push(message)
  },
  actions: {
    setNickname: (context, value) => context.commit("setNickname", value),
    addUser: (context, user) => context.commit("addUser", user),
    newMessage: (context, message) => {
      ws.send(message.text)
      context.commit('newMessage', message)
    },
    receiveMessage: (context, message) => context.commit("newMessage", message)
  }
})
