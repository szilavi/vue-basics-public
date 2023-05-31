# Jegyzet

## Tartalom

- A `VideoDetails` komponens

## Lépések

- A `VideoDetails` komponens tartalmazza a nagyméretű videót bal oldalt, valamint alatta a videó címét és rövid leírását
- Amire oda kell figyelni, hogy keresésnél nemcsak videókat, hanem lejátszási listákat is visszakaphatunk
- Lejátszási listák esetében a video object paraméterei másként alakulnak
- Hogy mindig a megfelelő link legyen létrehozva (videó esetén a videóra, lejátszási lista esetén a lejátszási listára mutató), szükségünk van egy computed property-re is:

```js
<script setup>
import { computed } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
})

const videoSrc = computed(() => {
  const baseSrc = 'https://youtube.com/embed/'
  return props.video.id.videoId
    ? baseSrc + props.video.id.videoId
    : `${baseSrc}videoseries?list=${props.video.id.playlistId}`
})
</script>
```

- Mivel lejátszási lista esetében nincs `videoId`, csak `playlistId`, emiatt a `VideoList` template-jét is módosítani kell:

```html
<template>
  <VideoItem v-for="(video, index) in videos" :key="index" :video="video" />
</template>
```

- A `VideoDetails` template-je pedig a következő lesz:

```html
<template>
  <div class="video-details">
    <div class="ratio ratio-16x9">
      <iframe :src="videoSrc" title="Video Player"></iframe>
    </div>
    <div class="mt-3">
      <h2 class="h4">{{ video.snippet.title }}</h2>
      <p class="lead">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>
```
