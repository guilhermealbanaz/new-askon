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
      
      <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
      </div>
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

</style>