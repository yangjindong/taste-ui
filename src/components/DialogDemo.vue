<template>
  <h3>示例1</h3>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
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
  <h3>示例2</h3>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import { openDialog } from '../lib/openDialog'
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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return { x, toggle, f1, f2, showDialog }
  }
})
</script>
