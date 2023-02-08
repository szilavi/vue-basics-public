# Jegyzet

## Tartalom
- A `GuitarsPrice` komponens

## Lépések
- A gitárok árát formázva kell megjeleníteni
- Hozzunk létre egy mappát az _src_-n belül _utils_ névvel
- Ezen belül legyen egy _formatPrice.js_ fájl 
- Itt egy függvény, ami a paraméterként kapott számot angol formátum szerint, euró jellel ellátva formázottan visszaadja

```js
export default function formatPrice(price) {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
}
```

- A `GuitarPrice` propként megkapja az árat
- A formázott árat egy computed propertybe fogom letárolni, és ezt fogom kiíratni 

```js
<script setup>
import { computed } from 'vue'
import formatPrice from '../utils/formatPrice.js'

const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
})

const formattedPrice = computed(() => formatPrice(props.price))
</script>

<template>
  <div class="guitar__price">{{ formattedPrice }}</div>
</template>

<style scoped>
.guitar__price {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
}
</style>
```

- Megjelenítem az árat a `GuitarItem` komponensben:

```html
<div class="right-column">
  <GuitarTitle :title="guitar.title" />
  <GuitarDescription :description="guitar.description" />
  <GuitarPrice :price="guitar.price" />
</div>
```