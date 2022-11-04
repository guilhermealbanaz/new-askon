 <!-- <template>
  <section>
        <div>
            <ResenhasAskon
                id="individual"
                :key="resenha.id"
                :ImgName="resenha.img"
                :ResenhaTitles="resenha.title"
                :ResenhaDate="resenha.date"
            >
                <div class="content">{{ resenha.content }}</div>
                <template v-slot:criador>
                    <p class="criador">{{ resenha.creator }}</p>
                </template>
                <template v-slot:generos>
                    <p class="generos">{{ resenha.gen }}</p>
                </template>
            </ResenhasAskon>
        </div>
  </section>
</template> -->

<template>
  <div
    class="tudo-individual"
    :style="{ backgroundImage: `url(${resenha.jogo.imagem})` }"
  >
    <div class="container-resenha-individual" v-rellax="{ speed: 10 }">
      <ResenhasAskon
        id="individual"
        :key="resenha.id"
        :ImgName="resenha.imagem_resenha"
        :ResenhaTitles="resenha.titulo"
        :ResenhaDate="resenha.data"
        :Estrela="resenha.estrela"
      >
        <div class="conteudo-resenha text-white">{{ resenha.descricao }}</div>
        <template v-slot:criador>
          <p class="criador-resenha text-white">
            {{ resenha.usuario.username }}
          </p>
        </template>
        <template v-slot:generos>
          <p class="generos">{{ "Genero" }}</p>
        </template>
      </ResenhasAskon>
      <div class="box-comentario-resenha">
        <input
          v-model="comentario"
          placeholder="Insira o seu comentário aqui !"
          type="text"
          class="comentario-resenha"
        />
        <button class="btn-comentar" @click="postComentario">Publicar</button>
        <div @click="curtirDescurtir" class="box-coracao">
          <mdiHeartOutline class="icone-curtir" :size="50" />
          <mdiHeart v-show="coracao" class="icone-curtir" :size="50" />
        </div>
      </div>
      <form class="box-comentarios" v-if="comentarios.length">
        <div
          style="color: white"
          v-for="(comentario, index) in comentarios"
          class="box-comentario"
          :key="index"
        >
          <div
            alt="Usuario.jpg"
            :style="{
              backgroundImage: 'url(' + comentario.usuario.imagem_perfil + ')',
            }"
            class="imagem_perfil-comentario"
          ></div>
          <div class="infos-comentario">
            <p class="conteudo-comentario">{{ comentario.comentario }}</p>
            <p class="user-infos-comentario">
              {{ comentario.usuario.username }} |
              <span
                >{{ new Date(comentario.data).toLocaleDateString() }} às
                {{ new Date(comentario.data).toLocaleTimeString() }}</span
              >
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=WeakMap"></script>
<script>
import mdiStar from "vue-material-design-icons/Star.vue";
import mdiGithub from "vue-material-design-icons/Github.vue";
import mdiLinkedin from "vue-material-design-icons/Linkedin.vue";
import mdiHeartOutline from "vue-material-design-icons/HeartOutline.vue";
import mdiHeart from "vue-material-design-icons/Heart.vue";
import ResenhasAskon from "@/components/ResenhasAskon.vue";
import axios from "axios";

export default {
  components: {
    ResenhasAskon,
    mdiStar,
    mdiGithub,
    mdiLinkedin,
    mdiHeartOutline,
    mdiHeart,
  },

  data() {
    return {
      resenha: {},
      comentario: "",
      comentarios: [],
      coracao: false,
    };
  },

  mounted() {
    const id = this.$route.params.id;

    this.getResenha(id);
  },

  methods: {
    async getResenha(id) {
      const { data } = await axios.get("Resenhas/" + id);
      console.log(data);
      this.resenha = data;
      this.getComentarios();
      this.getCurtida();
    },

    async getCurtida() {
      const { data } = await axios.get(
        "curtidas/?id_resenha=" + this.resenha.id
      );

      this.coracao = data.length ? true : false;
    },

    async postComentario() {
      await axios.post("comentario/", {
        comentario: this.comentario,
        resenha: this.resenha.id,
      });
      this.comentario = "";
      this.getComentarios();
    },

    async curtirDescurtir() {
      await axios.get(`Resenhas/${this.resenha.id}/curtir`);
      this.getCurtida();
    },

    async getComentarios() {
      const { data } = await axios.get(
        "comentario/?id_resenha=" + this.resenha.id
      );
      this.comentarios = data;
      console.log(this.comentarios);
    },

    getData(data) {
      const date = new Date(data);
    },

    comentar() {
      if (this.comentario) {
        this.comentarios.push(this.comentario);
      }
      this.comentario = "";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.imagem_perfil-comentario {
  background-size: cover;
  width: 80px;
  background-position: center;
}

.user-infos-comentario {
  font-size: 0.85em;
  color: #999999;
}

.box-comentario {
  color: #c9c9c9;
  padding: 10px;
  display: flex;
  height: 100px;
}

.infos-comentario {
  margin-left: 15px;
}
.box-comentario img {
  height: 100%;
}

.tudo-individual {
  top: 0;
  max-width: 100%;
  min-width: 100%;
  height: auto;
  position: absolute;
  background-size: contain;
  background-repeat: repeat-y;
}
.container-resenha-individual {
  border-radius: 20px;
  width: 50%;
  height: auto;
  padding-bottom: 100px;
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  margin: 300px auto;
  margin-bottom: 50px;
  background-color: #111;
}
.titulo-resenha {
  font-size: 35px;
  margin-top: 50px;
  text-align: center;
}
.box-estrelas-resenha {
  width: 200px;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.conteudo-resenha {
  width: 70%;
  margin: 0 auto;
}
.criador-resenha {
  width: 70%;
  text-align: left;
}
.box-comentario-resenha {
  width: 70%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid #4630ab;
  padding-top: 50px;
  font-size: 15px;
}
.comentario-resenha {
  width: 70%;
  height: 35px;
  border-radius: 0 10px 10px 0;
  background-color: #111;
  border: 2px solid #4630ab;
  padding-left: 5px;
  color: #c9c9c9;
}
.box-coracao {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.icone-curtir {
  position: fixed;
  color: #4630ab;
}
.box-comentarios {
  min-width: 70%;
  height: auto;
  box-sizing: border-box;
  border: 2px solid #4630ab;
  border-radius: 5px;
  background-color: #111;
}
.btn-comentar {
  width: 80px;
  height: 30px;
  background-color: #4630ab;
  color: #c9c9c9;
  border-radius: 10px;
}
.btn-comentar:hover {
  background-color: #111;
  border: 1px solid #4630ab;
  cursor: pointer;
}
</style>