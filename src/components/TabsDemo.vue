<template>
  <h2>Tabs组件</h2>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'

export default defineComponent({
  components: { Demo },
  setup() {
    return { Tabs1Demo }
  }
})
</script>
