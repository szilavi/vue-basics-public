<script setup>
defineProps({
  video: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <h2 class="h4">{{ video.snippet.title }}</h2>
    <img
      :src="video.snippet.thumbnails.medium.url"
      :alt="video.snippet.title"
    />
  </div>
</template>

<style scoped></style>
