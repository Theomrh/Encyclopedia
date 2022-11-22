const listeArticles = {
  template: `<div>
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
        <div v-else>
            <p @click="updateShowListe(0)" class="back-button"><i class="uil uil-angle-left-b"></i>Retour à la liste d'article</p>
            <router-view :listedata="liste" :idActuel="idActuel"></router-view>
        </div>
    </div>`,
  data() {
    return {
      liste: [
        {
          id: 0,
          name: "article 1",
          router: "article1",
          categorie: "Pdm",
          corps:
            "Lorem ipsum dolor sit amet. Et perferendis mollitia quo voluptas sint qui deleniti ipsam et neque totam. Ut veritatis nemo 33 quod quia a voluptatibus laudantium ut quia exercitationem sit reiciendis blanditiis rem molestiae nobis qui fuga harum. Qui nemo voluptate qui nemo ducimus est voluptates voluptatem aut temporibus pariatur eum eligendi delectus ut vero eveniet id pariatur quis?",
          auteur: "Julien",
          source: "Source article 1",
          image: "Url image 1",
        },
        {
          id: 1,
          name: "article 2",
          router: "article2",
          categorie: "Sèche",
          corps:
            "Hic exercitationem provident est rerum harum eos animi corporis est deleniti officiis aut placeat earum ea inventore dolores. In nihil soluta ut laborum voluptate ut corporis accusamus qui exercitationem rerum. Ex corporis rerum sed dolores distinctio aut dignissimos enim. Hic architecto adipisci et ducimus facilis et explicabo dignissimos.",
          auteur: "Eminem",
          source: "Source article 2",
          image: "Url image 2",
        },
        {
          id: 2,
          name: "article 3",
          router: "article3",
          categorie: "Alimentation",
          corps:
            "Ad vitae dolor est dolorem internos aut galisum rerum ut dolorem eius et officiis odit est molestiae molestiae. Sit delectus quia est officia veritatis eum vero fugiat cum saepe alias. Aut dicta iste est omnis quam ad error accusamus. Et rerum soluta sit ipsa dolores est nisi eveniet quo sint eaque.",
          auteur: "Fabrice",
          source: "Source article 3",
          image: "Url image 3",
        },
      ],
      showListe: false,
      idActuel: 0,
      search: "",
    };
  },
  methods: {
    updateShowListe(id) {
      this.showListe = !this.showListe;
      this.idActuel = id;
    },
  },
  computed: {
    filteredPosts() {
      return this.liste.filter((article) => article.name.includes(this.search));
    },
  },
};
