<script setup>
import { onMounted, ref } from 'vue'
import SearchBar from './components/video-player/SearchBar.vue'
import VideoList from './components/video-player/VideoList.vue'
import VideoDetails from './components/video-player/VideoDetails.vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'

const videos = ref(null)
const selectedVideo = ref(null)

function selectVideo(video) {
  selectedVideo.value = video
}

async function searchVideos(query) {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: query,
    },
  })

  videos.value = response.data.items
  selectedVideo.value = response.data.items[0]
}

onMounted(async () => {
  await searchVideos('vuejs')
})
</script>

<template>
  <header>
    <div class="container">
      <SearchBar @form-submit="searchVideos" />
    </div>
  </header>
  <main class="bg-light py-4">
    <div class="container">
      <div v-if="videos" class="row">
        <div class="col-lg-8">
          <VideoDetails :video="selectedVideo" />
        </div>
        <div class="col-lg-4">
          <VideoList :videos="videos" @select-video="selectVideo" />
        </div>
      </div>
    </div>
  </main>
</template>
