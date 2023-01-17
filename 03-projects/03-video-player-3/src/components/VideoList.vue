<script setup>
import VideoItem from './VideoItem.vue'

defineProps({
  videos: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <VideoItem v-for="video in videos" :key="video.id.videoId" :video="video" />
</template>

<style scoped></style>
