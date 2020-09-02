import Vue from "vue"
import Vuex from "vuex"
import ws from "../websocket"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    wsUrl: "ws://127.0.0.1:1338/affirm",
    nickname: "",
    users: [],
    messages: [],
    currentUser: null,
  },
  getters: {
    nickname: (state) => { return state.nickname },
    users: (state) => { return state.users },
    messages: (state) => { return state.messages },
    currentUser: (state) => { return state.currentUser }
  },
  mutations: {
    setNickname: (state, value) => state.nickname = value,
    setCurrentUser: (state, user) => state.currentUser = user,
    addUser: (state, user) => state.users.push(user),
    newMessage: (state, message) => state.messages.push(message)
  },
  actions: {
    setNickname: (context, value) => context.commit("setNickname", value),
    setCurrentUser: (context, user) => context.commit("setCurrentUser", user),
    addUser: (context, user) => {
      if (context.state.users.find((u) => u.nickname === user.nickname ) === undefined) {
        context.commit("addUser", user)
      } else {
        console.log(`User ${user.nickname} already exists`)
      }
    },
    newMessage: (context, message) => {
      if (ws.isConnected()) {
        ws.send(message.text)
        message.isSent = true
      }

      context.commit('newMessage', message)
    },
    receiveMessage: (context, message) => context.commit("newMessage", message)
  }
})
