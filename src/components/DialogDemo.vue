<template>
  <h3>示例1</h3>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
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
    const f1 = () => {
      console.log(1)
      return false
    }
    const f2 = () => {
      console.log(2)
    }
    return { x, toggle, f1, f2 }
  }
})
</script>
