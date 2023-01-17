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
  <VideoItem v-for="(video, index) in videos" :key="index" :video="video" />
</template>

<style scoped></style>
