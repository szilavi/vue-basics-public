<script setup>
import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'
import VideoList from './components/VideoList.vue'

const videos = ref(null)

async function searhVideos(query) {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: query,
    },
  })
  videos.value = response.data.items
  console.log(response.data.items)
}

onMounted(() => searhVideos('vuejs'))
</script>

<template>
  <header>
    <div class="container">SearchBar</div>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-lg-8"></div>
        <div class="col-lg-4">
          <VideoList :videos="videos" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
