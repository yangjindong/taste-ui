<demo>支持 disabled</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Switch } from '../lib/index'

export default defineComponent({
  components: { Switch },
  setup() {
    const bool = ref(false)
    return { bool }
  }
})
</script>
