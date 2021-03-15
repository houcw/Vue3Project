import IndexPage from '@/pages/index.vue'

export default 
    [
        {
            path: "/",
            name: "Home",
            component: IndexPage,
            children: [{
                path: '/homePage',
                name: "Home",
                component: () =>
                    import("../pages/home/home.vue"),
            }
            ]
        },
        {
            path: "/news",
            name: "news",
            component: IndexPage,
            children: [{
                path: '/newsList',
                name: "news",
                component: () =>
                    import("../pages/news/news.vue"),
            }]

        }
    ]






