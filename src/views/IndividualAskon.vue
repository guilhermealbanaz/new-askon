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
</template>

<script>
import ResenhasAskon from "@/components/ResenhasAskon.vue";
export default {
  components: { ResenhasAskon },
  
};
</script>

<style></style> -->

<template>
  <div class="tudo-individual">
    <div class="container-resenha-individual" v-rellax="{speed: 10}">
      <div class="titulo-resenha text-white">Dark Souls Resenha
      </div>
      <div class="box-estrelas-resenha">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
      <div class="conteudo-resenha text-white">"Jogo muito bom, recomendo muito pra quem gosta do estilo It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o purposes It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o purposes It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes o purposes"</div>
      <div class="criador-resenha text-white">Resenha feita por Fulano</div>
      <div class="box-comentario-resenha">
        <input placeholder="Comentar" type="text" class="comentario-resenha">
        <div @click="coracao = !coracao" class="box-coracao">
          <mdiHeartOutline class="icone-curtir" size="50"/> 
          <mdiHeart v-show="coracao" class="icone-curtir" size="50"/> 
        </div>
      </div>
    </div>
  </div>
</template>

<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=WeakMap"></script>
<script>
import mdiStar from "vue-material-design-icons/Star.vue";
import mdiGithub  from "vue-material-design-icons/Github.vue";
import mdiLinkedin   from "vue-material-design-icons/Linkedin.vue";
import mdiHeartOutline    from "vue-material-design-icons/HeartOutline.vue";
import mdiHeart from "vue-material-design-icons/Heart.vue";
export default {
   data (){
        return {
            coracao: false,
        }
    },
  components: {
    mdiStar,
    mdiGithub, 
    mdiLinkedin,
    mdiHeartOutline,
    mdiHeart, 
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.tudo-individual {
  width: 100%;
  height: auto;
  position: absolute ;
  background-image: url(../assets/fundo.jpg);
  background-size: cover;
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
}
.comentario-resenha {
  width: 60%;
  height: 30px;
  border-radius: 0 10px 10px 0;
  background-color: #111;
  border: 2px solid #4630AB;
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
  color: #4630AB
}
</style>