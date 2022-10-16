import Vue from "vue";
import VueRouter from "vue-router";
import HomeAskon from "@/views/HomeAskon.vue";
import CriarResenhaAskon from "@/views/CriarResenhaAskon.vue";
import LoginAskon from "@/views/LoginAndRegisterAskon.vue";
import PerfilAskon from "@/views/PerfilAskon.vue";
import IndividualAskon from "@/views/IndividualAskon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultAskon.vue"),
    children: [
      {
        path: "",
        component: HomeAskon,
      },
      {
        path: "/criar",
        component: CriarResenhaAskon,
        props: true,
      },
      {
        name: 'Template',
        path:`/individual/:id`,
        component: IndividualAskon,
        props: true,
      },
      {
        path: "/perfil",
        component: PerfilAskon,
      },
    ],
  },
  {
    path: "",
    name: "blank",
    component: () => import("@/layouts/BlankAskon.vue"),
    children: [
      {
        path: "/login",
        component: LoginAskon,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
