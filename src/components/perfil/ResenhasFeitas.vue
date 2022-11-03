<template>
  <div class="container-resenhas-perfil">
    <!-- <div class="box-resenhas-perfil" v-for="resenha in resenhas" :key="resenha.id">
          <div class="img-resenha-perfil"></div>
          <div class="box-texto-resenha-perfil">
            <div class="titulo-perfil">{{resenha.titulo}}</div>
            <div class="text-white">
              {{resenha.descricao}}
            </div>
            <div class="box-estrelas-perfil">
            
          </div>
          </div>
        </div> -->
    <ResenhasAskon
      id="perfil"
      v-for="resenha in resenhas.results"
      :key="resenha.id"
      :ImgName="resenha.imagem_resenha"
      :ResenhaTitles="resenha.titulo"
      :ResenhaDate="resenha.data"
      :Estrela="resenha.estrela"
    />
  </div>
</template>

<script>
import ResenhasAskon from "@/components/ResenhasAskon.vue";
import axios from "axios";

export default {
  components: {
    ResenhasAskon,
  },

  data() {
    return {
      resenhas: [],
    };
  },

  methods: {
    async getResenhasFeitas(id) {
      if (id) {
        const { data } = await axios.get(`/Resenhas/?usuario=` + id);
        this.resenhas = data;
      } else {
        const { data } = await axios.get(`minhas_resenhas`);
        this.resenhas = data;
      }
      console.log(this.resenhas);
    },
  },

  mounted() {
    const id = this.$route.params.id;
    this.getResenhasFeitas(id);
  },
};
</script>

<style>
</style>