import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib'



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
  render: h => h(App)
}).$mount('#app')
