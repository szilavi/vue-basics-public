<script setup>
import { onMounted } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'

onMounted(async () => {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: 'vuejs',
    },
  })
  console.log(response.data)
})
</script>

<template><div></div></template>

<style scoped></style>
