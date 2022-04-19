import { createApp } from 'vue';
import { createPinia } from 'pinia';

import customDirectives from '@/directives';

import App from './App.vue';

const app = createApp(App);

customDirectives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(createPinia());

app.mount('#app');
