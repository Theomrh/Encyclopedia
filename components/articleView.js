const articleView = {
  template: `<div class="article-view">

            <!-- Utilisation de for pour parcourir toute la data liste -->
            <!-- Affichage de chaque élément avec son nom dans la data liste -->
            <div v-for="item in listedata">
                <div v-if="idActuel == item.id" class="article-actuel">
                    <h1>{{ item.titre }}</h1>
                    <div className="position-image-article">
                        <img :src="item.image" class="image-article" alt="Image de muscle" />
                    </div>
                    <div className="corps-article-infos">
                        <p class="categorie">Catégorie: {{ item.categorie }}</p>
                        <p class="corps-article">{{ item.corps }}</p>
                        <p class="auteur">Auteur: {{ item.auteur }}</p>
                        <a :href="item.source" class="source">Source pour cet article</a>
                    </div>
                </div>

                <!-- Affichage des articles connexes -->
                <div class="connexe" v-else>
                    <router-link @click="changeArticle(item.id)" :to="{ path:item.router }">Aller à l'article <span>{{ item.name }}</span></router-link>
                </div>
            </div>
        </div>`,

  // Récupération des données du fichier listeArticles en les mettant dans une props
  props: ["listedata", "idActuel", "showListe"],
  methods: {
    changeArticle(id) {
      this.$emit("ChangeArticle", id);
    },
  },
};
