<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        class="gulu-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="gulu-tabs-content">
      <component
        class="gulu-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
        :class="{ selected: c.props.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Tab from './Tab.vue'

export default defineComponent({
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须为Tab')
      }
    })
    const current = computed(() => {
      console.log('重新return')
      return defaults.filter((tag) => {
        return tag.props.title == props.selected
      })[0]
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return { defaults, titles, current, select }
  }
})
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>