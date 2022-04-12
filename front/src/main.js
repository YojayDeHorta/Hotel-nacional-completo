import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib'
import axios from 'axios'
import i18n from './i18n'

const lang = localStorage.getItem('lang') || 'en';

axios.defaults.headers['Accept-Language'] = lang;

document.documentElement.lang = lang;



/*import Datepicker from 'vuejs-datepicker';
*/
/*import DatePicker from 'vue2-datepicker';
Vue.use(DatePicker);*/

Vue.config.productionTip = false


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
