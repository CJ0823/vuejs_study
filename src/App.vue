<template>
  <div id="app">
    <!-- 여기서 정의되는 component는 export default의 components 객체로부터 받아오고,
    그것은 다시 import 문으로부터 가져오는 것이다. -->    
    <h1>App.vue에서 표시합니다.</h1>
    <div>
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> About </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style scoped>
* {
  margin-left : 50px;
  margin-top : 50px;
}
  h1 {
    color: rgb(219, 205, 0);
  }
</style>
