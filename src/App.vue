<template>
  <div>
    <router-view />
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
