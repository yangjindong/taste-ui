<demo>常规用法</demo>
<template>
  <div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../lib/index'

export default defineComponent({
  components: { Button }
})
</script>
