import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import link from './components/helpers-components/link.vue';
import divider from './components/helpers-components/divider.vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import router from './router/router.vue';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

loadFonts();

createApp(App)
	.use(vuetify)
	.use(PerfectScrollbar)
	.component('app-link', link)
	.component('divider', divider)
	.component('router', router)
	.mount('#app');
