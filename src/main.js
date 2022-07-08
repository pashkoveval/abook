import { createApp } from 'vue';
import App from './App.vue';
import viewBody from './components/view-components/view-component-body.vue';
import link from './components/helpers-components/link.vue';
import divider from './components/helpers-components/divider.vue';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import router from './router/router.vue';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';

const app = createApp(App);

app.component('app-link', link);
app.component('divider', divider);
app.component('view-body', viewBody);
app.component('router', router);
app.use(PerfectScrollbar);
app.mount('#app');
