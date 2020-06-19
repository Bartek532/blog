import BlogsList from "../components/blogsList.vue";
import Photos from "../components/photos.vue";
import About from "../components/about.vue";
import Contact from "../components/contact.vue";
import Sign from "../components/signIn.vue";

import VueRouter from "vue-router";

export default new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            component: BlogsList
        },
        {
            path: "/photos",
            component: Photos
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/contact",
            component: Contact
        },
        {
            path: "/signin",
            component: Sign
        }
    ]
});