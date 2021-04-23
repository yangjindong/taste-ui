<template>
  <h3>示例1</h3>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"></Dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

export default defineComponent({
  name: 'DialogDemo',
  components: { Dialog, Button },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    return { x, toggle }
  }
})
</script>
