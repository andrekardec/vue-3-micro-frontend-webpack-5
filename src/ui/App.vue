<template>
  <div id="app">
    <h1>Hello, Uganda!</h1>
    <button @click="router.push({ name: 'home' })">Home</button>
     <button @click="router.push({ name: 'test' })">Test</button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';  
  const router = useRouter();

</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 5%;
  margin-right: 5%;
}
</style>