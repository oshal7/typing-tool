import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import NotFound from './components/nav/NotFound.vue';
import main from './components/homepage/main.vue';
import Keyboard from './components/lesson/Keyboard.vue';
import Jumble from './components/lesson/Jumble.vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'homepage', path: '/', component: main },
    {
      name: 'keyboard-lesson',
      path: '/keyboard-lesson/:lessonId',
      component: Keyboard,
      props: true
    },
    {
      name: 'jumble-lesson',
      path: '/jumble-lesson/:lessonId',
      component: Jumble,
      props: true
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.component('base-dialog', BaseDialog);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
