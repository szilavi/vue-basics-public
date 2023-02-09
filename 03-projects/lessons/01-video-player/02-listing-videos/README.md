# Jegyzet

## Tartalom

- Videók kilistázása

## Lépések

Jelenleg az adatok még csak a konzolra vannak kilogolva. Ezt módosítsuk, méghozzá úgy, hogy létrehozok egy reaktív változót, `videos` névvel a `ref`-el, a kezdő érték pedig `null`-ra állítom.
Az `onMounted` hookban lévő kódot kiemelem egy `searchFunction` függvénybe, ami a `queryt` paraméterként kapja majd meg. Ezen függvényen fogom beállítani a `videos` értékét. Majd ezt a függvény hívom csak meg az `onMounted` hookon belül.

```js
import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'

const videos = ref(null)

async function searchVideos(query) {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: query,
    },
  })
  videos.value = response.data.items
  console.log(response.data.items)
}

onMounted(() => searchVideos('vuejs'))
```

Elkészítem a template-et is, hogy a DOM-ba is bele legyenek írva videók:

```html
<header>
  <div class="container">SearchBar</div>
</header>
<main>
  <div class="container">
    <div class="row">
      <div class="col-lg-8"></div>
      <div class="col-lg-4">
        <div v-for="video in videos" :key="video.id.videoId">
          <h2 class="h4">{{ video.snippet.title }}</h2>
          <img
            :src="video.snippet.thumbnails.medium.url"
            :alt="video.snippet.title"
          />
        </div>
      </div>
    </div>
  </div>
</main>
```
