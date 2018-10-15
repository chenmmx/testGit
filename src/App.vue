<template>
  <div id="app">
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'usersets'}">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">用户设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #fff;
  margin-top: -60px;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 100%;
  height: 100%;
}
.mint-swipe {
  margin-top: 0;
  height: 200px;
}
</style>
