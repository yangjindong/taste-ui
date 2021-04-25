<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { router } from './router'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const width = document.documentElement.clientWidth
    // console.log(width);
    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false
      }
    })
  }
})
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
