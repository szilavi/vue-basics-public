# Jegyzet

## Tartalom

- A `GuitarStock` komponens

## Lépések

- A `GuitarStock` komponens
  - piros színnel kiírja: _Out of stock_ ha a termék nincs raktáron
  - narancs színnel kiírja: _Last chance, only X left_ ha 3nál kevesebb van raktáron
  - zöld színnel kiírja: _In stock_ ha 3nál több van raktáron

```js
<script setup>
defineProps({
  stock: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="guitar__stock">
    <span v-if="stock === 0" class="text-red">Out of stock</span>
    <span v-else-if="stock < 3" class="text-orange">
      Last chance, only {{ stock }} left
    </span>
    <span v-else class="text-green">In stock</span>
  </div>
</template>

<style scoped>
.guitar__stock {
  font-weight: bold;
}
</style>
```

- A megfelelő színekhez és 3 classt létrehozok a _main.css_ fájlban:

```css
.text-red {
  color: var(--red);
}

.text-orange {
  color: var(--orange);
}

.text-green {
  color: var(--green);
}
```

- A `GuitarRating` komponensnek adok egy alsó margót:

```html
<style scoped>
  .guitar__rating {
    margin: 0 0 0.5rem 0;
  }
</style>
```

- A `GuitarItem`en belül felhasználom a komponenst:

```html
<div class="right-column">
  <GuitarTitle :title="guitar.title" />
  <GuitarDescription :description="guitar.description" />
  <GuitarPrice :price="guitar.price" />
  <GuitarRating :rating="guitar.rating" />
  <GuitarStock :stock="guitar.stock" />
</div>
```
