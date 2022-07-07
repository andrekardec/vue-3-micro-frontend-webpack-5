import { createApp } from 'vue';
import App from '@ui/App.vue';
import Router from '@providers/router';
import { i18n } from '@providers/plugins/i18n';
import Primevue from 'primevue/config';
import { store } from '@providers/store';

/** Primevue */
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export const app = createApp(App);

app.use(Router);
app.use(store);
app.use(i18n);
app.use(Primevue);

app.use(ToastService);
app.component('Toast', Toast);

app.mount('#app');
