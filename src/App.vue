<template>
  <div>
    <router-view :key='$route.path'/>
  </div>
</template>

<script>
import { tokenChange } from "@/plugins/axios.js";
export default {
  data() {
    return {};
  },
  mounted() {
    tokenChange();
  },
};
</script>
