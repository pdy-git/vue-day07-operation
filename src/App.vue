<template>
  <div>
    <div>
      <router-link to="/homepage">主页</router-link>
      <router-link to="/message">新闻</router-link>
      <router-link to="/keepsports">体育</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
