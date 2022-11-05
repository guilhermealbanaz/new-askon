<template>
  <div>
    <NavBarAskon v-if="$route.name == 'Home'" />
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
};
</script>

<style>
.door-open-icon {
  scale: 1.1;
}
</style>
