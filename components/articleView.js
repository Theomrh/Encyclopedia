const articleView = {
  template: `<div class="article-view">

            <!-- Utilisation de for pour parcourir toute la data liste -->
            <!-- Affichage de chaque élément avec son nom dans la data liste -->
            <div v-for="item in listedata">
                <div v-if="idActuel == item.id">
                    <h1>Nom de l'article: {{ item.name }}</h1>
                    <p>{{ item.image }}</p>
                    <p>Catégorie: {{ item.categorie }}</p>
                    <p class="corps-article">{{ item.corps }}</p>
                    <p class="auteur">Auteur: {{ item.auteur }}</p>
                    <a href="#">Source pour cet article {{ item.source }}</a>
                </div>

                <!-- Affichage des articles connexes -->
                <div v-else>
                    <p>id{{ item.id }}, article: {{ item.name }}</p>
                </div>
            </div>
        </div>`,

  // Récupération des données du fichier listeArticles en les mettant dans une props
  props: ["listedata", "idActuel"],
};
