import { createApp } from 'vue';
import App from '@ui/App.vue';
import Router from '@providers/router';
import { i18n } from '@providers/plugins/i18n';
import Primevue from 'primevue/config';


export const app = createApp(App);

app.use(Primevue);
app.use(Router);
app.use(i18n);
app.mount('#app');
