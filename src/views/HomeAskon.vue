<template>
  <div class="tudo">
    <carousel
      navigationPrevLabel=""
      navigationNextLabel=""
      ref="carousel"
      :perPage="Number(1)"
      :autoplayTimeout="Number(2000)"
      :navigationEnabled="true"
      :navigationClickTargetSize="Number(20)"
      paginationActiveColor="#fff"
      :paginationSize="35"
      paginationColor="#020013"
      :autoplay="true"
      :loop="true"
    >
      <slide v-for="(imagem, index) in imagensTopicos" :key="index">
        <img :src="imagem" alt="" />
      </slide>
    </carousel>
    <div class="fade"></div>
    <BodyAskon></BodyAskon>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
// import mdiStar from "vue-material-design-icons/Star.vue";
// import mdiGithub  from "vue-material-design-icons/Github.vue";
import BodyAskon from "@/components/BodyAskon.vue";
export default {
  components: {
    BodyAskon,
    Carousel,
    Slide,

    // mdiStar,
    // mdiGithub,
    // mdiLinkedin,
  },
  data() {
    return {
      imagensTopicos: [
        require("@/assets/fundo1(slide).jpg"),
        require("@/assets/fundo2(slide).jpg"),
        require("@/assets/fundo3(slide).jpg"),
        require("@/assets/fundo4(slide).jpg"),
      ],
    };
  },
};
</script>
<style>


.VueCarousel {
  height: 800px;
}
.VueCarousel img {
  width: 100%;
  max-height: 800px;
}
.VueCarousel-dot {
  scale: 0.7;
  border-radius: 50% !important;
  background-color: aqua;
}
.VueCarousel-navigation-button {
  display: none;
}
</style>