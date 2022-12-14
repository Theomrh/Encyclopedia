const Creation = {
  template: `<div class="creation">
    <div v-if="!show" class="form">
      <div class="form-position">
      
          <div class="form__group field">
            <input type="text" class="form__field" v-model="name" placeholder="Nom article" name="name" id='name' required="required" />
            <label for="name" class="form__label">Name</label>
          </div>
          
          <br />
          
          <div class="form__group field">
            <textarea v-model="message" class="form__field" placeholder="ajoutez plusieurs lignes" name="message" id='message' required="required"></textarea>
            <label for="message" class="form__label">Message</label>
          </div>
          
          <br />
          
          <div class="form__group field">
            <input type="text" class="form__field" v-model="auteur" placeholder="Nom auteur" name="autor" id='autor' required="required" />
            <label for="autor" class="form__label">Auteur</label>
          </div>
          
          <br />
          
          <div class="form__group field">
            <input type="text" v-model="source" class="form__field" placeholder="Source article" name="source" id='source' required="required" />
            <label for="source" class="form__label">Source</label>
          </div>
      </div>

      <div className="select-position">
        <p>Ajouter une option:</p>
        <div class="select">
          <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>


      <div className="file-position">
        <label id="largeFile" for="file">
          <input type="file" id="file" @change="onFileChange">
        </label>
      </div>

        <div class="btn-position">
          <button @click="addArticle">Ajouter un article</button>
        </div>
    </div>

    <div v-else>
      <p @click="retourFormulaire()" class="back-button"><i class="uil uil-angle-left-b"></i>Retour au formulaire de cr??ation</p>
        <div v-for="article in articles" :key="article">
          <h1>{{ article.name }}</h1>
          <div className="position-image-article">
              <img :src="image" class="image-article" alt="Image d'article" />
          </div>
          <div className="corps-article-infos">
              <p class="categorie">Cat??gorie: {{ article.categorie }}</p>
              <p class="corps-article">{{ article.message }}</p>
              <p class="auteur">Auteur: {{ article.auteur }}</p>
              <a :href="article.source" class="source">Source pour cet article</a>
          </div>
        </div>
    </div>
  </div>`,
  data() {
    return {
      show: false,
      name: "",
      message: "",
      auteur: "",
      source: "",
      selected: "Alimentation",
      options: [
        { text: "Alimentation", value: "Alimentation" },
        { text: "Muscle", value: "Muscle" },
        { text: "Appareils", value: "Appareils" },
        { text: "Entra??nement", value: "Entra??nement" },
      ],
      image: "",
      articles: [],
    };
  },
  methods: {
    // R??cup??ration et cr??ation de l'image ?? partir de l'input file
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    // Back button
    // Ajout des infos dans l'array article
    addArticle() {
      this.show = true;
      this.articles.push({
        name: this.name,
        message: this.message,
        auteur: this.auteur,
        source: this.source,
        categorie: this.selected,
        image: this.image,
      });
    },
    // Back button
    retourFormulaire() {
      this.show = false;
    },
  },
};
