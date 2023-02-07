<script setup>
defineProps({
  video: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    role="button"
    class="container p-1 video"
    @keyup.enter="event.target.click()"
  >
    <div class="row">
      <div class="col-6">
        <img
          class="img-fluid"
          :src="video.snippet.thumbnails.medium.url"
          :alt="video.snippet.title"
        />
      </div>
      <div class="col-6 p-0">
        <h3 class="h6">{{ video.snippet.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
