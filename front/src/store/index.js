import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:null
  },
  getters: {
  },
  mutations: {
    setToken(state,payload){
      state.token=payload
    }
  },
  actions: {
    async login({commit},usuario){
        console.log(usuario);
        try {
          const res = await fetch(process.env.VUE_APP_BASE_URL+'/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
          })
          const {data, error} = await res.json()
          if(error) {
            console.log(error);
            return 
          }
          commit('setToken',data.token)
          localStorage.setItem('token',data.token)
          // console.log(data.token);
          router.push({ name: "calendario"})
          
          
        } catch (error) {
          console.log(error);
        }
    },
    leerToken({commit}){
      if(localStorage.getItem('token')){
        commit('setToken',localStorage.getItem('token'))
      }else{
        commit('setToken',null)
      }
    },
    cerrarSesion({ commit }) {
      commit('setToken', null)
      localStorage.removeItem('token')
      router.push({ name: "login"})
    }
    
  },

  modules: {
  }
})
