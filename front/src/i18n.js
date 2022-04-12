import en from './assets/i18n/en.json'
import es from './assets/i18n/es.json'
import fra from './assets/i18n/fra.json'
import VueI18n from 'vue-i18n'
import Vue from 'vue'


Vue.use(VueI18n);

export default new VueI18n({
	locale:localStorage.getItem('lang') || 'en',
	messages:{
		en:en,
		es:es,
		fra:fra
	}
})
