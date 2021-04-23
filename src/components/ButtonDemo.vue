<template>
  <div>Button示例</div>
  <h3>示例1</h3>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h3>示例2</h3>
  <Button>你好</Button>
  <Button size="small">你好</Button>
  <Button size="big">你好</Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../lib/Button.vue'

export default defineComponent({
  name: 'ButtonDemo',
  components: {
    Button
  },
  setup() {
    const onClick = () => {
      console.log('Hi')
    }
    return { onClick }
  }
})
</script>
