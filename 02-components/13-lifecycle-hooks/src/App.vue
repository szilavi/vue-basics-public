<script setup>
import { ref } from 'vue'
import AppTitle from './components/AppTitle.vue'

const isTitleVisible = ref(true)

setTimeout(() => (isTitleVisible.value = false), 5000)
</script>

<template>
  <AppTitle v-if="isTitleVisible" />
</template>

<style scoped></style>
