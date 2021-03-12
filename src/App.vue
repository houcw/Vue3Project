<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "App",
  setup(props, context) {
        const route = useRoute();
        const router = useRouter();
        return {};
    }
}
</script>

<style lang="scss">
#app {
  font-size: 16px;
}
</style>
