<template>
  <div class="container-resenha">
    <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
      <div data-aos="flip-left" data-aos-duration="800">
        <img class="img-resenha" draggable="false" :src="ImgName" alt="" />
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
          <star-rating
            :rating="Estrela"
            :increment="0.01"
            :read-only="true"
            :fixed-points="2"
            :animate="true"
            :active-color="[
              '#9485de',
              '#9485de',
              '#7c68de',
              '#6f59de',
              '#4630ab',
            ]"
            :active-border-color="['#F6546A', '#a8c3c0']"
            :star-points="[
              23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46,
              19, 31, 17,
            ]"
          ></star-rating>

          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import mdiStar from "vue-material-design-icons/Star.vue";
import Utils from "@/mixins/UtilMixin";
export default {
  components: {
    mdiStar,
    StarRating,
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
    Estrela: {
      type: Number,
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
