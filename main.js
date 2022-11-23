// Définir quelques routes
// Chaque route doit correspondre à un composant.
const routes = [
  {
    path: "/",
    component: listeArticles,
    // Liens enfants sur la page listeArticles
    children: [
      {
        path: ":id",
        component: articleView,
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

// Créer l'instance du routeur et passer l'option `routes`
const router = VueRouter.createRouter({
  // Fournir l'implémentation de l'historique à utiliser.
  history: VueRouter.createWebHashHistory(),
  routes, // abréviation de "routes : routes".
});

// Créer et monter l'instance racine.
const app = Vue.createApp({});

// Utilisation de l'instance du router pour rendre l'application
// Compatible avec le router
app.use(router);
app.component("navigation", Navigation);

app.mount("#app");
