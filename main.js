// Router
const routes = [
  {
    path: "/",
    component: listeArticles,
    // Liens enfants sur la page listeArticles
    children: [
      {
        path: "/article1",
        component: articleView,
        // Récupération des données dans la data liste
        props: (route) => ({ query: route.query.id }),
      },
      {
        path: "/article2",
        component: articleView,
        // Récupération des données dans la data liste
        props: (route) => ({ query: route.query.id }),
      },
      {
        path: "/article3",
        component: articleView,
        // Récupération des données dans la data liste
        props: (route) => ({ query: route.query.id }),
      },
    ],
  },
  { path: "/about", component: About },
  { path: "/presentation", component: Presentation },
  {
    path: "/creation",
    component: Creation,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

// Création de l'app
const app = Vue.createApp({});

app.use(router);
app.mount("#app");
