<template>
  <div>
    <NavBarAskon v-if="$route.name == 'Home'" />
    <router-view />
  </div>
</template>

<script>
import NavBarAskon from "@/components/NavBarAskon.vue";
export default {
  components: {
    NavBarAskon
  },
};
</script>

<style>
.door-open-icon {
  scale: 1.1;
}
</style>
