<template>
  <div>
    <NavBarAskon v-if="$route.name == 'Home'" />
    <Header2 v-else />
    <router-view />
  </div>
</template>

<script>
import Header2 from "@/components/Header2.vue";
import NavBarAskon from "@/components/NavBarAskon.vue";
export default {
  components: {
    NavBarAskon,
    Header2,
  },

  mounted() {
    console.log(this.$route.name);
  },
};
</script>

<style>
.door-open-icon {
  scale: 1.1;
}
</style>
