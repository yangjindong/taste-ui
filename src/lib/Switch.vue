<template>
  <button
    class="gulu-switch"
    @click="toggle"
    :class="{ 'gulu-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      //'input'对应@input， !props.value对应$event
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
})
</script>


<style lang="scss">
@use "sass:math";

$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #b7b7b7;
  border-radius: math.div($h, 2);
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: math.div($h, 2);
    transition: all 250ms;
  }
  &.gulu-checked {
    background-color: #1585ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>