<script setup>
import VideoItem from './VideoItem.vue'

defineEmits(['select-video'])

defineProps({
  videos: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div>
    <VideoItem
      v-for="video of videos"
      :key="video.id.videoId"
      :video="video"
      @click="$emit('select-video', video)"
    />
  </div>
</template>
