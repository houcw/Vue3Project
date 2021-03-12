import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// 引入elementJs
import {components,plugins} from './element'
// 引入公共的css样式文件
import './assets/css/global.scss'
const app = createApp(App);
app.use(router);
app.mount("#app");
// 使用elemntUI组件
components.forEach(component => {
    app.component(component.name, component)
})
plugins.forEach(plugin => {
    app.use(plugin)
})
