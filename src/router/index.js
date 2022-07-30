import { createRouter, createWebHistory } from 'vue-router';
import PageMain from '@/pages/PageMain';
import PageCatalog from '@/pages/PageCatalog';

const routes = [
    {
        path: '/',
        component: PageMain
    },
    {
        path: '/catalog',
        component: PageCatalog,
        children: [
            {
                path: '/catalog/:category',
                component: PageCatalog
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;