/*
* Author:dinglong
* DateTime:2024/1/7 下午 9:54
*/
import {Router} from 'svelte-pilot'
const mode = import.meta.env.MODE
export default new Router({
    base: mode === 'production' ? '/wadmin' : '/',
    routes: [
        {
            path: '/login',
            component: () => import('../lib/login/index.svelte')
        },
        {
            path: '/',
            component: () => import('../lib/layout.svelte'),
        },
        {
            component: () => import('../lib/layout.svelte'),
            children: [
                {
                    path: "/wallpaper_type",
                    component: () => import("../lib/wallpaper_type/index.svelte")
                },
                {
                    path: "/wallpaper",
                    component: () => import("../lib/wallpaper/index.svelte")
                },
                {
                    path: "/statis",
                    component: () => import("../lib/statis/index.svelte")
                }
            ]
        },
        {
            path: '(.*)',
            component: () => import('../lib/notFound.svelte')
        }
    ]
})
