# Jegyzet

## Tartalom
- A `CartButton` komponens script-je

## Lépések
- A komponensnek propként meg kell kapnia a gitárt, melyet majd a kosárba akarunk tenni
- A `count` reaktív változóba tárolom el, hogy hány darabot akarok a kosárba tenni/mennyi van most a termékből a kosárban
- `handleDescreaseCountClick()` és a `handleIncreaseCountClick()` metódusok eggyel növelik/csökkentik a `count` értékét
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

function handleDescreaseCountClick() {
  count.value -= 1
}

function handleIncreaseCountClick() {
  count.value += 1
}
function handleCartButtonClick() {}
</script>
```

- Használjuk fel a metódusokat a tempalte-ben

```html
<template>
  <div class="cart">
    <button @click="handleDescreaseCountClick">-</button>
    <input v-model="count" type="text" />
    <button @click="handleIncreaseCountClick">+</button>
    <button class="add-to-cart" @click="handleCartButtonClick">
      Add to cart
    </button>
  </div>
</template>
```