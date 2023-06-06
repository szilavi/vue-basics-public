# Jegyzet

## Tartalom

- A `GuitarDescription` komponens

## Lépések

- A `GuitarDescription` komponens megkapja propként a gitár leírását, és egy bekezdésen belül megjeleníti azt:

```js
<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="guitar__description">{{ description }}</p>
</template>
```

- Ezt felhasználjuk a `GuitarItem`-ön belül:

```html
<div class="right-column">
  <GuitarTitle :title="guitar.title" />
  <GuitarDescription :description="guitar.description" />
</div>
```
