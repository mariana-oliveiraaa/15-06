import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CursosView from "../views/CursosView.vue";
import MateriasView from "../views/MateriasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/Cursos",
      name: "Cursos",
      component: CursosView,
    },
    {
      path: "/Materias",
      name: "Materias",
      component: MateriasView,
    },
  ],
});

export default router;
