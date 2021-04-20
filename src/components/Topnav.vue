<template>
  <div class="topnav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li><a href="">菜单1</a></li>
      <li><a href="">菜单2</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";

export default defineComponent({
  name: "Topnav",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    console.log("topnav获取的asideVisible为：" + asideVisible?.value + " a");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
});
</script>

<style lang="scss" scoped>
.topnav {
  background-color: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>