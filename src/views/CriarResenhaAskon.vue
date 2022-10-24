<template>
  <div class="tudo-criar" ref="tudo-criar">
    <!-- eslint-disable-next-line -->
    <img
      class="imagem-fundo"
      :src="require('../assets/' + backgroundatual)"
      alt=""
    />
    <div class="container-criar">
      <div class="box-criar-resenha">
        <div class="box-img-resenha-criar">
          <input type="file" name="image" id="image" class="box-img-criar" />
          <label for="image" class="box-img-criar"
            ><mdiFileImagePlus :size="50"
          /></label>
        </div>
        <div class="box-texto-criar">
          <input type="text" class="input-criar" placeholder="Título" />
          <label class="text-white" for="jogos">Escolha o jogo:</label>
          <select
            class="input-jogos-resenha"
            name="jogos"
            id="jogo"
            v-model="backgroundatual"
          >
            <option value="default.jpg" selected>Jogo selecionado</option>
            <option value="fundo.jpg">Dark Souls</option>
            <option value="Elden.jpg">Elden Ring</option>
            <option value="valorant.jpg">Valorant</option>
            <option value="leagueoflegends.jpg">League Of Legends</option>
          </select>
        </div>
      </div>
      <textarea
        placeholder="Digitar resenha..."
        style="resize: none"
        name="texto-criar"
        id="texto-criar"
        cols="5"
        rows="55"
        class="conteudo-criar"
      >
      </textarea>
      <star-rating
        class="estrelas-criar"
        :animate="true"
        :active-color="['#9485de', '#9485de', '#7c68de', '#6f59de', '#4630ab']"
        :active-border-color="['#F6546A', '#a8c3c0']"
        :star-points="[
          23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19,
          31, 17,
        ]"
        v-model="boundRating"
      ></star-rating>
      <div class="publicar-resenha">Publicar</div>
    </div>
  </div>
</template>

<script>
import mdiStar from "vue-material-design-icons/Star.vue";
import mdiFileImagePlus from "vue-material-design-icons/FileImagePlus.vue";
import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      boundRating: 5,
      games: "",
      backgroundatual: "default.jpg",
    };
  },
  components: {
    mdiStar,
    mdiFileImagePlus,
    StarRating,
  },
  methods:{
    
  }
};
</script>

<style>
.estrelas-criar {
  margin: 15px;
}

.vue-star-rating-rating-text[data-v-fde73a0c] {
  display: none;
}
* {
  margin: 0;
  padding: 0;
}
.rating {
  z-index: 1;
}
.tudo-criar {
  top: 0;
  max-width: 100%;
  height: 1200px;
  position: absolute;
  background-image: url(../assets/default.jpg);
  background-position: center;
  background-size: cover;
  background-color: #111;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.imagem-fundo {
  min-width: 100%;
  min-height: 100%;
}
.container-criar {
  border-radius: 20px;
  padding-top: 10px;
  margin-top: 100px;
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #4630ab;
  position: absolute;
}
.box-criar-resenha {
  width: 80%;
  height: 250px;
  display: flex;
  gap: 10%;
  margin-top: 20px;
}
.box-img-resenha-criar {
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-img-criar {
  width: 25%;
  height: 200px;
  background-color: #4630ab;
  border: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.box-texto-criar {
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
}
.input-criar {
  border-radius: 5px;
  width: 70%;
  height: 35px;
  background-color: #111;
  border: none;
  border: 1px solid #4630ab;
  color: #c9c9c9;
  padding-left: 10px;
  font-size: 18px;
}
.input-jogos-resenha {
  border-radius: 5px;
  width: 50%;
  height: 40px;
  background-color: #111;
  border: 1px solid #4630ab;
  color: #c9c9c9;
}
.input-jogos-resenha option {
  font-size: 13px;
}
.box-estrelas-criar {
  width: 60px;
  height: 10px;
  display: flex;
  gap: 20px;
}
.conteudo-criar {
  width: 80%;
  padding: 10px;
  background-color: #111;
  color: #c9c9c9;
  border: 2px solid #4630ab;
  margin-top: 50px;
}
.publicar-resenha {
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 20px;
  background-color: #4630ab;
  transition: 0.2s all ease-out;
}
.publicar-resenha:hover {
  background-color: #111;
  color: #c9c9c9;
  scale: 1.1;
  cursor: pointer;
}
</style>
