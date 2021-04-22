<template>
  <div>
    <Switch :value="y" @input="y = $event" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default defineComponent({
  name: 'SwitchDemo',
  components: { Switch },
  setup() {
    const y = ref(true)
    return { y }
  }
})
</script>
