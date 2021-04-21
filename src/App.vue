<template>
  <Topnav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Topnav from "./components/Topnav.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Topnav,
  },
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width);
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
  },
});
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
