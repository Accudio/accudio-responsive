<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  outline: none;
}

body {
  background-color: #fff;
  margin: 20px 0 0;
  padding: 0;
}

div {
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
}
</style>
