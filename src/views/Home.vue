<template>
  <div class="topnav-banner">
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Topnav from '../components/Topnav.vue'

export default defineComponent({
  name: 'Home',
  components: { Topnav },
  setup() {}
})
</script>


<style lang="scss" scoped>
.topnav-banner {
  background: rgb(128, 147, 101);
  background: linear-gradient(
    115deg,
    lighten(rgba(128, 147, 101), 15%) 0%,
    rgba(128, 147, 101, 1) 100%
  );
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  color: #eeeeee;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      color: #cccccc;
      background: #2b2e15;
      display: inline-block;
      $h: 30px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 12px;
      &:hover {
        border-bottom: 1px solid;
      }
    }
  }
}
</style>