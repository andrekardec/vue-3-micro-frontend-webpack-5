import { createApp } from 'vue';
import App from '@ui/App.vue';
import Router from '@providers/router';


export const app = createApp(App);
console.log('test');

app.use(Router);
app.mount('#app');
