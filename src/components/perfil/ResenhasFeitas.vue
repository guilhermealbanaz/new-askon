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
        v-for="resenha in resenhas"
        :key="resenha.id"
        :ImgName="'akali2.jpg'"
        :ResenhaTitles="resenha.titulo"
        :ResenhaDate="resenha.data"
        :Estrela="resenha.estrela"
        />
        </div>
</template>

<script>
import ResenhasAskon from '@/components/ResenhasAskon.vue'
import { mapState } from "vuex";
import axios from "axios";
export default {
  components:{
        ResenhasAskon
    },
  computed: {
      ...mapState("auth", ["loggedIn"]),
      ...mapState('usuariovisitado', ['usuariovisitado'])
    },
    data(){
        return{
            resenhas: [],
        }
    },
    methods:{
    async getresenhas() {
        this.resenhas = []
        const { data } = await axios.get(`/Resenhas/?iduser=${this.usuariovisitado.id}`);
        this.resenhas = data;
        console.log(this.resenhas);
    },    
    },
    mounted() {
    this.getresenhas();
    },
    watch:{
        usuariovisitado(){
            this.getresenhas();
        }
    }
}
</script>

<style>

</style>