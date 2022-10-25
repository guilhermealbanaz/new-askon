<template>
<div class="container-resenha">
  <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
    <div data-aos="flip-left"
          data-aos-duration="800">
      <img
        class="img-resenha"
        draggable="false"
        :src="require('../assets/' + ImgName)"
        alt=""
      />
    </div>

    <div class="box-texto-resenha">
      <h2 class="titulo">{{ ResenhaTitles }}</h2>
      <div class="text-white">
      <slot> Resenha Padrão </slot>
    
      <span class="data">{{ formatDate(ResenhaDate) }}</span>
      <span>
        <slot name="criador"></slot>
        <slot name="generos"></slot>
      </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import mdiStar from "vue-material-design-icons/Star.vue";
import Utils from "@/mixins/UtilMixin";
export default {
  components:{
    mdiStar,
  },

  props: {
    ImgName: {
      type: String,
      required: true,
    },
    ResenhaTitles: {
      type: String,
      required: true,
    },
    ResenhaDate: {
      type: String,
      required: true,
    },
  
  },
  mixins: [Utils],
};
</script>

<style>
    #individual .titulo {
        color: #c9c9c9;
        text-align: center;
        margin-top: -30px;
        margin-bottom: 30px;
        font-size: 30px;
        border-bottom: 1px solid #c9c9c9;
    }
    #individual .img-resenha {
        width: 500px;
        height: 250px;
        margin-top: 50px;
        border: 2px solid #4630ab;
    }
    #individual .data {
        font-size: 20px;
        color: #c9c9c9;
    }
    #individual .box-resenha {
      height: auto;
      width: 80%;
      left: -3%;
      transition: none;
      transform: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #individual .box-texto-resenha {
      width: 100%;
      height: auto;
      align-items: center;
    }
    #individual .conteudo-resenha {
      width: 85%;
      margin-bottom: 30px;
      color: #c9c9c9;
      width: 100%;
      font-size: 20px;
    }
</style>