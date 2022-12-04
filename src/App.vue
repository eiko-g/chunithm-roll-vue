<template>
  <div class="main-body">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #3a302e;
}

a {
  color: #ff398c;
  text-decoration: none;
}

.main-body {
  width: 80%;
  max-width: 600px;
  min-height: 90vh;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 0 4px #283791, 0 0 0 8px rgba(#fff, .3);
}
</style>
