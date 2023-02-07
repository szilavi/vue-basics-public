# Jegyzet

## Tartalom

- A `SearchBar` komponens

## Lépések

- A `SearchBar` komponensen belül tárolnunk kell, hogy mi a keresőszó, amit el akarunk majd küldeni
- Ehhez egy `query` nevű reaktív változót hozok létre
- Ezt a `v-model` direktíva segítségével összekötöm egy input mezővel
- A `SearcBar`nál az enter billentyű leütésére fog elindulni a keresés
- Ilyenkor kerül a form elküldésre
- Szükségem lesz még egy egyedi eseményre, mely a küldésnél a `queryt` megkapja második paraméterként
- Az egyedi esemény neve legyen `form-submit`

```vue
<script setup>
import { ref } from 'vue'

const query = ref('')

defineEmits(['form-submit'])
</script>

<template>
  <div class="search-bar my-3" @submit.prevent="$emit('form-submit', query)">
    <form action="" class="form">
      <div class="form-group d-flex justify-content-center">
        <input
          id="search"
          v-model="query"
          type="text"
          class="form-control form-control-lg w-50"
          placeholder="Search video"
        />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
```

- Ezt az egyedi esemény figyeljük az `App`on belül
- Amikor bekövetkezik, meghívjuk a `searchVideos` függvényt

```html
<header>
  <div class="container">
    <SearchBar @form-submit="searchVideos" />
  </div>
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
```
