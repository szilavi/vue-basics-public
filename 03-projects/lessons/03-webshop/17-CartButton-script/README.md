# Jegyzet

## Tartalom

- A `CartButton` komponens scriptje

## Lépések

- A komponensnek propként meg kell kapnia a gitárt, amelyet majd a kosárba akarunk tenni
- A `count` reaktív változóban tárolom el, hogy hány darabot akarok a kosárba tenni/mennyi van most a termékből a kosárban
- a `handleDecreaseCountClick()` és a `handleIncreaseCountClick()` metódusok eggyel növelik/csökkentik a `count` értékét
- A `handleCartButtonClick()` a terméket a kosárba helyezi/frissíti a kosarat

```js
<script setup>
import { ref } from 'vue'

defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)

function handleDecreaseCountClick() {
  count.value -= 1
}

function handleIncreaseCountClick() {
  count.value += 1
}
function handleCartButtonClick() {}
</script>
```

- Használjuk fel a metódusokat a template-ben:

```html
<template>
  <div class="cart">
    <button @click="handleDecreaseCountClick">-</button>
    <input v-model="count" type="text" />
    <button @click="handleIncreaseCountClick">+</button>
    <button class="add-to-cart" @click="handleCartButtonClick">
      Add to cart
    </button>
  </div>
</template>
```
