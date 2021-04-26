<template>
  <div class="topnav-banner">
    <Topnav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个面向学习者的UI框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
$color: #2b2e15;
.topnav-banner {
  background: rgb(128, 147, 101);
  background: linear-gradient(
    115deg,
    lighten(rgba(128, 147, 101), 15%) 0%,
    rgba(128, 147, 101, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  h1,
  h2 {
    color: $color;
  }
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
      border-radius: 4px;
      padding: 0 12px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 22px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>