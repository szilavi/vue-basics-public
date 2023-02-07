<script setup>
import { ref } from 'vue'
import MainNavigation from './components/MainNavigation.vue'
import SiteContent from './components/SiteContent.vue'
import SiteFooter from './components/SiteFooter.vue'

const title = ref('VUE')

setTimeout(() => (title.value = 'REACT'), 5000)
</script>

<template>
  <MainNavigation :title="title" />
  <SiteContent />
  <SiteFooter />
</template>

<style scoped></style>
