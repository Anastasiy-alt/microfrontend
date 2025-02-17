import { registerApplication, start } from 'single-spa'
import { createStore } from './src/store/index.js'

window.store = createStore()

registerApplication(
    'vue',
    () => import('./src/vue/vue.app.js'),
    () => location.pathname === "/react" ? false : true
);

registerApplication(
    'react',
    () => import('./src/react/main.app.js'),
    () => location.pathname === "/vue"  ? false : true
);

start();