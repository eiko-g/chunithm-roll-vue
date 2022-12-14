<template>
  <div class="main-body">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
:root {
  --color-B: #00ab84;
  --color-A: #ff7e00;
  --color-E: #f12929;
  --color-M: #8e1be5;
  --color-U: #ff173d;

  --color-pops_anime: #f02d6d;
  --color-niconico: #8c46ab;
  --color-toho: #3862b4;
  --color-variety: #458d68;
  --color-irodorimidori: #d15995;
  --color-geikimai: #ba9f39;
  --color-original: #bd2a1a;

  --color-border: #283791;
}

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

.tips {
  font-size: 12px;
  color: #999;
  text-align: center;
}
</style>
