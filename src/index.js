import Vue from 'vue'
import App from './app.vue'
import {createRouter} from './router'

import './index.less'


export function createApp() {
  const router = createRouter();
  
  const app = new Vue({
    el: 'app',
    router,
    render: h => h(App),
    components: {app}
  });

  // expose the app and the router
  return {app, router};
}

window.onload = () => createApp();
