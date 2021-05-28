<template>
  <h2>Dialog示例</h2>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import Demo from './Demo.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'

export default defineComponent({
  name: 'DialogDemo',
  components: { Demo },
  setup() {
    return { Dialog1Demo, Dialog2Demo }
  }
})
</script>
