<demo>支持size</demo>
<template>
  <div>
    <Button size="big">大大</Button>
    <Button>普通</Button>
    <Button size="small">小小</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../lib/Button.vue'

export default defineComponent({
  components: { Button }
})
</script>
