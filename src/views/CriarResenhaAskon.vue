<template>
  <div class="tudo-criar" ref="tudo-criar">
    <!-- eslint-disable-next-line -->
    <img class="imagem-fundo" :src="model" alt="" />
    <div class="container-criar">
      <div class="box-criar-resenha">
        <div class="box-img-resenha-criar">
          <div
            class="img-inserida"
            :style="{
              backgroundImage: `url(${imagem})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }"
          >
            <input
              type="file"
              name="image"
              style="display: none"
              @change="changeImagem"
              ref="imagem_input"
            />
            <button id="button-imagem" @click="$refs['imagem_input'].click()">
              Adicionar Imagem
            </button>
          </div>
        </div>
        <div class="box-texto-criar">
          <input
            type="text"
            class="input-criar"
            placeholder="Título"
            v-model="novaResenha.titulo"
          />
          <label class="text-white" for="jogos">Escolha o jogo:</label>
          <advanced-search
            id="jogo"
            class="input-criar"
            @select="mudou"
            :options="options"
          >
          </advanced-search>
        </div>
      </div>
      <textarea
        v-model="novaResenha.descricao"
        placeholder="Digitar resenha..."
        style="resize: none"
        name="texto-criar"
        id="texto-criar"
        cols="5"
        rows="55"
        class="conteudo-criar"
      >
      </textarea>
      <Estrelas :boundRating="5" @alteraEstrela="alteraEstrela"></Estrelas>
      <div class="publicar-resenha" @click="postResenha" ref="buttonPublicar">
        <span v-if="!isLoading">Publicar</span>
        <img
          src="../assets/loading (1).gif"
          alt="Loading"
          id="loading-criar"
          v-else
        />
      </div>
      <span class="error" v-if="hasError"
        >Ocorreu um erro! Verifique os campos e tente novamente!</span
      >
    </div>
  </div>
</template>

<script>
import AdvancedSearch from "vue-advanced-search";
import Estrelas from "@/components/Estrelas.vue";
import axios from "axios";
import StarRating from "vue-star-rating";
import InputCriar from "@/components/InputCriar.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      novaResenha: {
        estrela: 0,
      },
      possibleJogos: [],
      model: require("../assets/default.jpg"),
      options: [],
      imagem: "",
      isLoading: false,
      hasError: false,
    };
  },

  components: {
    Estrelas,
    StarRating,
    InputCriar,
    AdvancedSearch,
  },

  methods: {
    mudou(newValue) {
      this.model = newValue;
      this.changeJogo(newValue);
    },

    changeJogo(imagem) {
      const { nome } = this.possibleJogos.find((jogo) => jogo.imagem == imagem);
      this.novaResenha.jogo = nome;
    },

    changeImagem() {
      const file = this.$refs.imagem_input.files[0];
      const reader = new FileReader();
      const _this = this;

      reader.onload = (result) => {
        const imagem = reader.result.split(",")[1];

        _this.imagem = reader.result;

        // const img = new Image();
        // img.src = reader.result;

        // _this.$refs["imagem_input"].style.backgroundImage = "url(" + img + ")";

        _this.novaResenha.imagem_resenha = imagem;
        console.log(_this.novaResenha.imagem_resenha);
      };

      reader.readAsDataURL(file);
    },

    async postResenha() {
      this.$refs["buttonPublicar"].style.background = "#111";
      this.hasError = false;
      this.isLoading = true;
      try {
        const { data } = await axios.post("/Resenhas/", this.novaResenha);
        this.$router.push({ path: `/individual/${data.id}` });
      } catch (e) {
        this.isLoading = false;
        this.hasError = true;
      } finally {
        this.isLoading = false;
      }
    },

    alteraEstrela(estrela) {
      this.novaResenha.estrela = estrela;
    },

    async getPossibleJogos() {
      const { data } = await axios.get("jogos");
      this.possibleJogos = data;
      this.options = data.map((jogo) => {
        return { label: jogo.nome, value: jogo.imagem };
      });
    },
  },

  computed: {
    ...mapState("auth", ["user"]),
  },

  async mounted() {
    await this.getPossibleJogos();
  },
};
</script>

<style>
.error {
  color: red;
  text-align: center;
  margin-bottom: 20px;
}

#loading-criar {
  height: 20px;
}

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

#button-imagem {
  position: absolute;
  top: calc(100% - 23px);
  border-radius: 5px;
  width: 200px;
  left: 50%;
  height: 36px;
  transform: translateX(-50%);
  padding: 5px 20px;
  background: #c9c9c9;
  border: 1px solid #4630ab;
  color: #111;
  transition: all 0.2s ease;
}
#button-imagem:hover {
  background-color: #4630ab;
  color: #c9c9c9;
}
.img-inserida {
  position: relative;
  width: 100%;
  background: #111;
  border: 1px solid #4630ab;
  height: 100%;
}

.box-img-criar {
  opacity: 0;
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
  color: #c9c9c9;
  transition: 0.2s all ease-out;
}
.publicar-resenha:hover {
  background-color: #111;
  color: #c9c9c9;
  cursor: pointer;
}
</style>
