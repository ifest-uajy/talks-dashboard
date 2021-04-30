import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'

Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    fb.usersCollection.doc(user.uid).get().then((doc) => {
      if (doc.exists) {
        store.commit('setRegistration', doc.data())
      }
    })
  }
})

export const store = new Vuex.Store({
  state: {
    user: null,
    registration: null
  },
  mutations: {
    setCurrentUser (state, user) {
      state.user = user
    },
    setRegistration (state, reg) {
      state.registration = reg
    }
  },
  actions: {
  },
  modules: {
  }
})
