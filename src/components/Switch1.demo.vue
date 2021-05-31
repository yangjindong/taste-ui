<demo>常规用法</demo>
<template>
  <Switch v-model:value="bool" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Switch } from '../lib/index'

export default defineComponent({
  components: { Switch },
  setup() {
    const bool = ref(true)
    return { bool }
  }
})
</script>