import Vue from "vue";
import VueRouter from "vue-router";
import Country from "../components/Country";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Country",
        component: Country,
    },
    {
        path: "/:id",
        name: "CountryPage",
        // route level code-splitting
        // this generates a separate chunk (recipe.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "recipe" */ "../components/CountryPage.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;