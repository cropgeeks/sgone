import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

let name = process.env.VUE_APP_INSTANCE_NAME

if (!name) {
  name = 'sgone-' + window.location.pathname
}

export default new Vuex.Store({
  state: {
    locale: 'en_GB'
  },
  getters: {
    storeLocale: (state) => state.locale
  },
  mutations: {
    ON_LOCALE_CHANGED_MUTATION: function (state, newLocale) {
      state.locale = newLocale
    }
  },
  actions: {
    setLocale: function ({ commit }, locale) {
      commit('ON_LOCALE_CHANGED_MUTATION', locale)
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: name
  })]
})
