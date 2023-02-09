# Jegyzet

## Tartalom

- A `GuitarsTitle` komponens

## Lépések

- A `GuitarsTitle` komponens propként csak a `title`t fogja megkapni
- Ezt egy címsor kettőn belül fogja megjeleníteni

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
  <h2 class="guitar__title">{{ title }}</h2>
</template>

<style scoped>
.guitar__title {
  margin: 0 0 0.5rem 0;
}
</style>
```

- A `GitarItem` komponensen belül használjuk fel:

```html
<div class="right-column">
  <GuitarTitle :title="guitar.title" />
</div>
```
