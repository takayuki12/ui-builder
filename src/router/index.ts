// Composables
import { createRouter, createWebHistory } from "vue-router";
import { COMPONENT_LIST, PAGE_COMPONENT } from "./route-name";

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/default/Default.vue"),
        children: [
            {
                path: "",
                name: PAGE_COMPONENT,
                components: {
                    builder: () =>
                        import(
                            /* webpackChunkName: "page-components" */ "@/components/page/page-components.vue"
                        ),
                },
            },
            {
                path: "components",
                name: COMPONENT_LIST,
                components: {
                    builder: () =>
                        import(
                            /* webpackChunkName: "page-components" */ "@/components/list/component-list.vue"
                        ),
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
