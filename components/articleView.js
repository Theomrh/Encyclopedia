const articleView = {
  template: `<div class="article-view">
            <div v-for="item in listedata">
                <div v-if="idActuel == item.id">
                    <h1>Nom de l'article: {{ item.name }}</h1>
                    <p>{{ item.image }}</p>
                    <p>Catégorie: {{ item.categorie }}</p>
                    <p class="corps-article">{{ item.corps }}</p>
                    <p class="auteur">Auteur: {{ item.auteur }}</p>
                    <a href="#">Source pour cet article {{ item.source }}</a>
                </div>
                <div v-else>
                    <p>id{{ item.id }}, article: {{ item.name }}</p>
                </div>
            </div>
        </div>`,
  props: ["listedata", "idActuel"],
};
