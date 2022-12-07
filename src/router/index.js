import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'
import HomeAskon from "@/views/HomeAskon.vue";
import CriarResenhaAskon from "@/views/CriarResenhaAskon.vue";
import LoginAskon from "@/views/LoginAndRegisterAskon.vue";
import IndividualAskon from "@/views/IndividualAskon.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultAskon.vue"),
    meta: {
      auth: true
    },
    children: [
      {
        name: "Home",
        path: "",
        component: HomeAskon,
      },
      {
        name: 'Criar',
        path: "/criar",
        component: CriarResenhaAskon,
        props: true,
      },
      {
        name: 'Template',
        path: `/individual/:id`,
        component: IndividualAskon,
        props: true,
      },
    ],
  },
  {
    name: "MeuPerfil",
    path: `/perfil/`,
    component: () => import("@/layouts/PerfilMain.vue"),
    props: true,
  },
  {
    name: "Perfil",
    path: `/perfil/:id`,
    component: () => import("@/layouts/PerfilMain.vue"),
    props: true,
  },
  {
    path: "",
    name: "blank",
    component: () => import("@/layouts/BlankAskon.vue"),
    meta: {
      auth: false,
    },
    children: [
      {
        name: 'Login',
        path: "/login",
        component: LoginAskon,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.state.auth.loggedIn) {
      next({
        name: "Login"
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
