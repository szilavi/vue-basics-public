# Jegyzet

## Tartalom

- Egy videó kiválasztása
- Egyedi esemény létrehozása

## Lépések

- Amikor rákattintunk egy videóra, vagy amikor rajta van a fókusz és lenyomjuk az enter billentyűt, be kell töltődnie a bal oldalra
- Ehhez tudnunk kell, melyik videó van kiválasztva, és ezt a kiválasztott videót kell a `VideoDetails` komponensnek megkapnia
- Ami eddig kimarad, hogy ahhoz, hogy a videó fókuszálható legyen, még a `tabindex`et is meg kell adnunk a `VideoItem`-en:

```js
<div
    role="button"
    tabindex="0"
    class="container p-1 video"
    @keyup.enter="$event.target.click()"
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
```

- Az App-ban hozzunk létre egy reaktív változót, ami a kiválasztott video objectet fogja majd tartalmazni

```js
const selectedVideo = ref(null)
```

- Azt, hogy melyik videóra kattintottunk a `VideosList`ből tudjuk meg
- Hozzunk létre a `VideosList`en belül egy egyedi eseményt, melynek legyen a neve `select-video`
- Amikor a `VideoItem`en kattintunk, vagy entert ütünk, akkor bocsájtja majd ki az eseményt, mindek a második paramétere az adott video object lesz:

```js
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
```

- Majd pedig az `App`on belül rendeljünk ehhez az eseményhez egy függvényt

```js
<script setup>
import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'
import VideoList from './components/VideoList.vue'
import VideoDetails from './components/VideoDetails.vue'

const videos = ref(null)
const selectedVideo = ref(null)

async function searchVideos(query) {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: query,
    },
  })
  videos.value = response.data.items
  selectedVideo.value = videos.value[0]
}

function selectVideo(video) {
  selectedVideo.value = video
}

onMounted(() => searchVideos('vuejs'))
</script>

<template>
  <header>
    <div class="container">SearchBar</div>
  </header>
  <main>
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
```

- Tehát amikor bekövetkezik a `select-video` esemény meghívódik a `selectVideo` függvény, ami paraméterként automatikusan megkapja a video objektumot, és ezt adja értékül a `selectedVideo`nak
- A `VideoDetails` pedig ezt a `selectedVideo`t fogja propként megkapni
- A `selectedVideo`nak, hogy ne a `null` maradjon az értéke, már a `searchVideos`on belül beállítom az értékét, ami nem lesz más, mint az első megtalált videó
