# Jegyzet

## Tartalom

- A `GuitarsRating` komponens

## Lépések

- A gitárok értékelése egy 1-5 közötti egész szám
- Annyi tele csillagot kell megjeleníteni amennyi az értékelés
- Ha 5-nél kevesebb, akkor üres csillagokkal kall feltölteni a helyeket, hogy pontosan 5 darab csillag legyen
- Mögöttük zárójelben még a számserű értéket is meg kell jeleníteni
- A `ratingStars` computed property tartalmazza majd az a stringet, amit meg kell jeleníteni
- Ha egy gitár esetében az értékelés 0, az azt jelenti, hogy nem érkezett még rá értékelés, ilyenkor a _Not rated_ text legyen megjelenítve

```js
<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
})

const ratingStars = computed(
  () => `
  ${'★'.repeat(props.rating)}
  ${'☆'.repeat(5 - props.rating)}
  (${props.rating})
`
)
</script>

<template>
  <div class="guitar__rating">
    <span v-if="rating > 0">{{ ratingStars }}</span>
    <span v-else>Not rated</span>
  </div>
</template>

<style scoped>
.guitar__rating {
  margin: 0 0 0.5rem 0;
}
</style>
```

- Használjuk fel ezt a komponenst is a `GuitarItem`-en belül:

```html
<div class="right-column">
  <GuitarTitle :title="guitar.title" />
  <GuitarDescription :description="guitar.description" />
  <GuitarPrice :price="guitar.price" />
  <GuitarRating :rating="guitar.rating" />
  <GuitarStock :stock="guitar.stock" />
</div>
```
