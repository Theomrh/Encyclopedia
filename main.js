const routes = [
  {
    path: "/",
    component: listeArticles,
    children: [
      {
        path: "/article1",
        component: articleView,
        props: (route) => ({ query: route.query.id }),
      },
      {
        path: "/article2",
        component: articleView,
        props: (route) => ({ query: route.query.id }),
      },
      {
        path: "/article3",
        component: articleView,
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

const app = Vue.createApp({});

app.use(router);
app.mount("#app");
