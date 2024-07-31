import Vue from "vue";
import VueRouter from "vue-router";

const HomeView = () =>
  import(/*webpackChunkName: "Home"*/ "../views/HomeView.vue");

const ContatoView = () =>
  import(/*webpackChunkName: "Contato"*/ "../views/ContatoView.vue");

const CursosView = () =>
  import(/*webpackChunkName: "Cursos"*/ "../views/CursosView.vue");
const CursoView = () =>
  import(/*webpackChunkName: "Cursos"*/ "../views/CursoView.vue");
const AulaComponent = () =>
  import(/*webpackChunkName: "Cursos"*/ "../components/AulaComponent.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contato",
    name: "contato",
    component: ContatoView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosView,
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: CursoView,
    props: true,
    children: [
      {
        path: ":aula",
        name: "aula",
        props: true,
        component: AulaComponent,
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
