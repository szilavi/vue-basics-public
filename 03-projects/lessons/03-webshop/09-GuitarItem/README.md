# Jegyzet

## Tartalom

- A `GuitarItem` komponens váza
- A `GuitarItem` által felhasznált egyéb komponensek

## Lépések

- Hozzuk létre a `GuitarItem` komponenst
- Egy `GuitarItem` komponens több apró komponensből fog felépülni, ezek:

  - GuitarImage
  - GuitarName
  - GuitarDescription
  - GuitarPrice
  - GuitarRating
  - GuitarStock
  - CartButton

- A `GuitarItem` propként mindig megkap egy guitar objektumot
- A template két fő részre osztható:
  - bal oldalt egy kép
  - jobb oldalt az egyéb adatok

```js
<script setup>
defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="guitar">
    <div class="left-column">Image</div>
    <div class="right-column">Content</div>
  </div>
</template>

<style scoped>
.guitar {
  box-shadow: 0.25rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  display: flex;
  padding: 1rem;
  margin: 0 0 2rem 0;
}

.right-column {
  padding: 0 0 0 3rem;
}
</style>

```
