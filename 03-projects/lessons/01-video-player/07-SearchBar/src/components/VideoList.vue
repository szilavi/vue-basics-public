<script setup>
import VideoItem from './VideoItem.vue'

defineProps({
  videos: {
    type: Array,
    required: true,
  },
})

defineEmits(['select-video'])
</script>

<template>
  <VideoItem
    v-for="(video, index) in videos"
    :key="index"
    :video="video"
    @click="$emit('select-video', video)"
  />
</template>

<style scoped></style>
