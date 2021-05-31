<demo>一键打开Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { openDialog, Button } from '../lib/index'

export default defineComponent({
  components: { Button },
  setup() {
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
    return { showDialog }
  }
})
</script>
