import Vue from 'vue'
import App from './App.vue'

import characterData from './movieData.js'

Vue.config.productionTip = false

let data = {
  characters: characterData
}

new Vue({
  data,
  render: h => h(App),
}).$mount('#app')
