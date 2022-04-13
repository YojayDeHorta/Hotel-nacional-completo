import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib'
import VueI18n from 'vue-i18n'
import messages from './lang'
import axios from 'axios'



Vue.config.productionTip = false


Vue.use(VueI18n)


export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

Vue.use(VueTelInputVuetify, {
  vuetify,
});


new Vue({
  router,
  store,
  vuetify,
    i18n,
  render: h => h(App)
}).$mount('#app')
