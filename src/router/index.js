
import {createRouter,createWebHashHistory}  from "vue-router";
import routers from './router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router
