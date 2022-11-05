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
    <div class="loading-home" v-show="isLoading">
      <img
        src="https://manifestoglauber.com.br/frontend/assets/images/loader.gif"
        alt="Loading..."
      />
    </div>
    <BodyAskon
      v-show="!isLoading"
      @toggle_loading="isLoading = !isLoading"
    ></BodyAskon>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
// import mdiStar from "vue-material-design-icons/Star.vue";
// import mdiGithub  from "vue-material-design-icons/Github.vue";
import BodyAskon from "@/components/BodyAskon.vue";
import { mapState } from "vuex";

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
      isLoading: false,
    };
  },
};
</script>

<style>
.loading-home {
  scale: 0.3;
  width: 100px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.VueCarousel {
  height: 700px;
}
.VueCarousel img {
  width: 100%;
  max-height: 700px;
}
.VueCarousel-dot {
  scale: 0.7;
  border-radius: 50% !important;
  background-color: aqua;
}
.VueCarousel-navigation-button {
  display: none;
}
.fade {
  display: none;
}
</style>