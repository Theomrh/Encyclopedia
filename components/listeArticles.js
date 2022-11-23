const listeArticles = {
  template: `<div>

        <!-- Si showListe est différent que le booléen qu'il est actuellement -->
        <!-- Alors il affiche le logo et la liste des articles -->
        <div v-if="!showListe" class="liste-article-position">
          <div class="articles-image">
              <div className="mascotte-position">
                  <div className="circle-mascotte"></div>
                  <img class="mascotte" src="../images/mascotte.png" alt="Image de la mascotte" />
              </div>
              <input class="search-bar" placeholder="Search" type="text" v-model="search" />
              <ul>
                  <li v-for="article in filteredPosts">
                      <router-link class="liste-article" @click="updateShowListe(article.id)" :to="{ path:article.router }">{{ article.name }}</router-link>
                  </li>
              </ul>
          </div>
        </div>
        
        <!-- Sinon afficher un bouton pour retourner à la liste d'article -->
        <!-- Affichage également des infos de l'article initialisé dans la data liste -->
        <div v-else>
            <p @click="updateShowListe(0)" class="back-button"><i class="uil uil-angle-left-b"></i>Retour à la liste d'article</p>
            <router-view @ChangeArticle="showNewArticle" :listedata="liste" :idActuel="idActuel"></router-view>
        </div>
    </div>`,
  data() {
    return {
      liste: [
        {
          id: 0,
          name: "Anatomie des bras",
          titre: "Anatomie des bras",
          router: "anatomie",
          categorie: "Muscles",
          corps:
            "Les bras sont composés des biceps, des triceps et des avant-bras. Les avant-bras sont des muscles à ne pas négliger car ils sont responsables de la 'prise', qui est le facteur limitant d’un mouvement. Si l’avant-bras n’est pas assez fort pour résister à une charge, c’est tout le développement des biceps et des triceps qui peut être compromis. Aussi, il est important de connaître les articulations autour desquelles ces muscles sont insérés : l’épaule et le coude. Préservez ces zones en prenant soin de vous échauffer convenablement, et aussi en vous étirant en fin de séance. Une blessure, même anodine, peut anéantir des mois de progression et stoppe net le développement musculaire. Aucun muscle ne peut grossir autour d’une articulation douloureuse.",
          auteur: "Toutelanutrition",
          source:
            "https://www.toutelanutrition.com/wikifit/guide-zone/homme/les-bras",
          image: "../images/muscle-bras.jpg",
        },
        {
          id: 1,
          name: "Alimentation, essentielle ?",
          titre: "L'alimentation est-elle essentielle en musculation ?",
          router: "alimentation",
          categorie: "Alimentation",
          corps:
            "Lorsque vous pratiquez une activité physique, particulièrement lors de votre séance de sport, votre corps doit être en pleine forme si vous souhaitez améliorer vos performances et atteindre vos objectifs. Une alimentation riche en protéines, un apport calorique conséquent et un mode de vie adapté augmenteront les chances de succès et permettront un développement musculaire régulier et croissant. C’est pourquoi il faut adopter une nutrition sportive. Selon de récentes études scientifiques, la nutrition a le plus grand impact sur notre forme physique.",
          auteur: "Eric Favre",
          source:
            "https://www.ericfavre.com/lifestyle/importance-alimentation-musculation/",
          image: "../images/alimentation.jpeg",
        },
        {
          id: 2,
          name: "La créatine",
          titre: "Les effets de la créatine en musculation",
          router: "creatine",
          categorie: "Alimentation",
          corps:
            "Qui n’a pas entendu parler de la creatine monohydrate ? C’est un des suppléments les plus populaires parmi les sportifs de nombreuses disciplines. Et pour cause, elle permet d’améliorer les performances physiques dans les sports qui demandent des efforts courts et intenses. C’est aussi un des suppléments les plus étudiés depuis le début des années 90, pas seulement pour ses effets sur les muscles mais aussi pour ses applications médicales. Cet article, qui s’appuie sur de nombreuses études scientifiques, fait le point sur cette substance et se veut un guide complet pour toute personne souhaitant se supplémenter et notamment les pratiquants de musculation.",
          auteur: "NUTRIPURE",
          source:
            "https://www.nutripure.fr/fr/blog/effet-creatine-musculation-n77",
          image: "../images/creatine.webp",
        },
      ],
      showListe: false,
      idActuel: 0,
      search: "",
    };
  },
  methods: {
    /**
     * Récupération de l'id et l'ajouter à une variable idActuel
     * @param {id} id dans la data liste
     */
    updateShowListe(id) {
      this.showListe = !this.showListe;
      this.idActuel = id;
    },
    showNewArticle(id) {
      this.idActuel = id;
    },
  },
  computed: {
    // Permet de filtrer les articles à partir d'un input (barre de recherche)
    filteredPosts() {
      return this.liste.filter((article) => article.name.includes(this.search));
    },
  },
};
