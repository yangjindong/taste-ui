<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">LOGO</router-link>
    </div>
    <ul class="menu">
      <li><a href="">菜单1</a></li>
      <li><a href="">菜单2</a></li>
    </ul>
  </div>
</template>

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