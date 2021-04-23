<template>
  <h3>示例1</h3>
  <Dialog />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dialog from '../lib/Dialog.vue'

export default defineComponent({
  name: 'DialogDemo',
  components: { Dialog },
  setup() {}
})
</script>
