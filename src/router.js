import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        { path: '/case1', component: () => import('./views/case1.vue') },
        { path: '/case2', component: () => import('./views/case2/index.vue') },
    ], // `routes: routes` 的缩写
})
