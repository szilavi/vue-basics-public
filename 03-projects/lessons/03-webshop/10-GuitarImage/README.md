# Jegyzet

## Tartalom

- A `GuitarsImage` komponens

## Lépések

- Módosítsuk még a `GuitarItem` kinézetét
- A _main.css_ fájlban létrehozok két classt:

```css
.container {
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
}

.text-center {
  text-align: center;
}
```

- Majd a `GuitarsListView` fájlt módosítom:

```js
<script setup>
import GuitarsList from '../components/GuitarsList.vue'
</script>
<template>
  <h1 class="text-center">Guitars</h1>
  <GuitarsList />
</template>

<style scoped></style>
```

- Az `App` komponensnél pedig felhasználom a `container`-t

```html
<template>
  <MainNavigation />
  <main class="container">
    <router-view></router-view>
  </main>
</template>
```

- Hozzuk létre a `GuitarImage` komponenst
- propként elég a `title`t megkapnia, ez megegyezik a kép nevével
- Megjelenítem a képet és formázom:

```js
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <img :src="`guitars/${title}.jpg`" :alt="title" class="guitar__image" />
</template>

<style scoped>
.guitar__image {
  height: 250px;
}
</style>
```

- Felhasználom a `GuitarImage` komponenst a `GuitarItem` komponensen belül
- A bal oldali rész tartalmazza a képet:

```html
<div class="left-column">
  <GuitarImage :title="guitar.title" />
</div>
```
