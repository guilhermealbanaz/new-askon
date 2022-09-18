<template>
  <div>
    <NavBarAskon v-if='$route.path != `/perfil` && $route.path != `/individual` && $route.path != `/criar`'></NavBarAskon>
    <header2 v-else/>
    <router-view/>
    <FooterAskon/>
  </div>
</template>

<script>
import FooterAskon from '@/components/FooterAskon.vue'
import header2 from "@/components/header2.vue";
import NavBarAskon from "@/components/NavBarAskon.vue";
export default {
  components: {
    FooterAskon,
    NavBarAskon,
    header2
  },
};
</script>

<style></style>
