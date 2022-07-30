import { createApp } from 'vue';
import App from './App.vue';
import componentsUI from '@/components/UI';
import router from '@/router';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

componentsUI.forEach(component => {
    app.component(component.name, component);
});

app
    .use(VueLazyload)
    .use(router)
    .mount('#app');