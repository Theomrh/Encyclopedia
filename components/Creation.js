const Creation = {
  template: `<div class="creation">
    <div v-if="!show" class="form">
    <div class="form-position">
        <div class="form__group field">
          <input type="text" class="form__field" v-model="name" placeholder="Nom article" name="name" id='name' required />
          <label for="name" class="form__label">Name</label>
        </div>
        <br />
        <div class="form__group field">
          <textarea v-model="message" class="form__field" placeholder="ajoutez plusieurs lignes" name="message" id='message' required></textarea>
          <label for="message" class="form__label">Message</label>
        </div>
        <br />
        <div class="form__group field">
          <input type="text" class="form__field" v-model="auteur" placeholder="Nom auteur" name="autor" id='autor' required />
          <label for="autor" class="form__label">Auteur</label>
        </div>
        <br />
        <div class="form__group field">
          <input type="text" v-model="source" class="form__field" placeholder="Source article" name="source" id='source' required />
          <label for="source" class="form__label">Source</label>
        </div>
    </div>

    <div className="select-position">
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
      <p @click="retourFormulaire()" class="back-button"><i class="uil uil-angle-left-b"></i>Retour au formulaire de création</p>
      <ul>
        <li v-for="article in articles" :key="article">
          Nom: {{ article.name }}
          <br />
          Message: {{ article.message }}
          <br />
          Auteur: {{ article.auteur }}
          <br />
          Source: {{ article.source }}
          <br />
          Catégorie: {{ article.categorie }}
          <br />
          <img :src="image" />
        </li>
      </ul>
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
        { text: "Entraînement", value: "Entraînement" },
      ],
      image: "",
      articles: [],
    };
  },
  methods: {
    // Récupération et création de l'image à partir de l'input file
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
