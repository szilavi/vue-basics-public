# Jegyzet

## Tartalom

- `VideoList` és `VideoItem` komponensek elkészítése

## Lépések

- Az `App.vue`-ból szervezzük ki a videók kilistázását
- Maga a lista a `VideosList` komponensen belül lesz
- A `VideosList` komponens pedig nem másokat, mint `VideoItem`-eket fog tartalmazni.
- A `VideosList` komponens props-ként megkapja a videos tümböt
- A template-en belül pedig a `VideoItem` komponensen magán használom a `v-for` direktívát
- A `VideoItem` propsként mindig egy videót fog kapni

```js
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
```

- A `VideoItem` a videó címét, és a bélyegképét fogja megjeleníteni:

```js
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
```
