<template>
  <div>
    <star-rating
      v-if="$route.path == '/criar'"
      class="estrelas-criar"
      :animate="true"
      :active-color="['#9485de', '#9485de', '#7c68de', '#6f59de', '#4630ab']"
      :active-border-color="['#F6546A', '#a8c3c0']"
      :star-points="[
        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31,
        17,
      ]"
      :rating="rating"
      v-model="rating"
      @rating-selected="mudarEstrela"
    ></star-rating>
    <star-rating
      v-else
      :read-only="true"
      class="estrelas-criar"
      :active-color="['#9485de', '#9485de', '#7c68de', '#6f59de', '#4630ab']"
      :active-border-color="['#F6546A', '#a8c3c0']"
      :star-points="[
        23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19, 31,
        17,
      ]"
      :rating="rating"
      v-model="rating"
      @rating-selected="mudarEstrela"
    ></star-rating>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  props: ["boundRating"],
  components: {
    StarRating,
  },
  data() {
    return {
      rating: this.boundRating,
    };
  },
  methods: {
    mudarEstrela() {
      this.$emit("alteraEstrela", this.rating);
    },
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style>
</style>