
import {createRouter,createWebHashHistory}  from "vue-router";
import routers from './router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
    // [
    //     {
    //         path: "/home",
    //         name: "Home",
    //         component: () =>
    //         import("../pages/home/home.vue"),
    //     },
    //     {
    //         path: "/newsList",
    //         name: "news",
    //         component: () =>
    //             import("../pages/news/news.vue"),
    //     }
    // ]
})
export default router
