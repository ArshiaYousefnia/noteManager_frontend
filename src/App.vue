<template>
  <div id="app" class="app-container">
    <router-view />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
  overflow-x: hidden;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
