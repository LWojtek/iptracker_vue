import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'
// import leaflet from 'leaflet';

Vue.use(VueAxios, axios)



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ip:[],
    newIP: '',
    isEmpty: true,
    notCorrect: false,
    loaded: false,
  },
  mutations: {
    getIP(state, ip){
      state.ip = ip
      state.loaded = true
    },
    resetMap(state){
      state.ip.lat = 50.09,
      state.ip.lng = 18.55
    }
  },
  actions: {
    getIP({ commit }, ) {
      axios
      .get(`https://geo.ipify.org/api/v1?apiKey=at_rmpu6wg8NW3ULUcswCioT2J4DIHwK&ipAddress=${this.state.newIP}`)

      .then(response => response.data)
      .then(ip => {
        commit('getIP', ip = {
          address: ip.ip,
          city: ip.location.city,
          state: ip.location.region,
          timezone: ip.location.timezone,
          isp: ip.isp,
          lat: ip.location.lat,
          lng: ip.location.lng,
          postalCode: ip.location.postalCode   
        });
        
   
      })
      .catch((err) => {
          console.log(err)
      } )
    },
    resetMap({commit}) {
      commit('resetMap');
    }
  },
  modules: {
  }
})


