<script setup>
import MainNavigation from './components/MainNavigation.vue'
</script>

<template>
  <MainNavigation />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
