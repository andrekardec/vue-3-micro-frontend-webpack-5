<template>
  <div id="app">
    <h1>{{ $t('hello') }}</h1>
    <Button @click="router.push({ name: 'home' })">Home</Button>
     <Button @click="router.push({ name: 'test' })">Test</Button>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button';

  import { useRouter } from 'vue-router';  
  const router = useRouter();

</script>
<style lang="scss">
@import 'primevue/resources/themes/tailwind-light/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 5%;
  margin-right: 5%;
  background-color: $yellow;
}
</style>