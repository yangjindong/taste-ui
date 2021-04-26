<template>
  <div class="topnav">
    <span class="toggleAside" @click="toggleAside"></span>
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-taste"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  name: 'Topnav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleAside }
  }
})
</script>

<style lang="scss" scoped>
$h: 32px;
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-content: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg {
      height: $h;
      width: $h;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
    a {
      line-height: $h;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background-color: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .logo {
      margin: 0 auto;
    }
    > .menu {
      display: none;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>