<demo>常规用法</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="true"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <strong>第一行字</strong>
        <p>第二行字</p>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue'

export default defineComponent({
  components: { Button, Dialog },
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
