<template>
  <div>
    <NavBarAskon
      v-if="
        $route.name != `Perfil` &&
        $route.name != `Template` &&
        $route.name != `Criar`
      "
    ></NavBarAskon>
    <header2 v-else />
    <router-view />
  </div>
</template>

<script>
import header2 from "@/components/header2.vue";
import NavBarAskon from "@/components/NavBarAskon.vue";
export default {
  components: {
    NavBarAskon,
    header2,
  },
};
</script>

<style>
.door-open-icon {
  scale: 1.1;
}
</style>
