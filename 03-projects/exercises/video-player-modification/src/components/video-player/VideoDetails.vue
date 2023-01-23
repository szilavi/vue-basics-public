<script setup>
import { computed } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
})

const videoSrc = computed(() => {
  const srcBase = 'https://youtube.com/embed/'
  return props.video.id.videoId
    ? srcBase + props.video.id.videoId
    : `${srcBase}videoseries?list=${props.video.id.playlistId}`
})
</script>

<template>
  <div class="video-detail">
    <div class="ratio ratio-16x9">
      <iframe :src="videoSrc" title="Video Player" />
    </div>
    <div class="mt-3">
      <h2 class="h4">
        {{ video.snippet.title }}
      </h2>
      <p class="lead">
        {{ video.snippet.description }}
      </p>
    </div>
  </div>
</template>
