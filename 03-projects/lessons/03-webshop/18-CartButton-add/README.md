# Jegyzet

## Tartalom

- A cart store
- Gitár hozzáadása a kosárhoz

## Lépések

- A kosár módosításához kell egy új store
- A `store` mappán belül hozzuk létre a _cart.js_ fájlt
- A `cart` egy reaktív változó lesz, ezt `readonly`vá teszem, hogy kívülről csak a függvények tudják módosítani
- A `addItemToCart()` egy adott termékből x darabot a kosárba helyez

```js
import { ref, readonly } from 'vue'

const cart = ref([])

export function useCartStore() {
  function addItemToCart(item, count) {
    cart.value.push({ ...item, count })
  }

  return {
    cart: readonly(cart),
    addItemToCart,
  }
}
```

- Most módosítsuk a `CartButton` komponenst
- Importáljuk a `useCartStore`t, ebből a `cart` és az `addItemToCart()`re lesz szükségünk
- A `handleCartButtonClick` paraméterként kaja meg a gitárt - ne felejtsétek el a template-be átadni - és hívja meg a `addItemToCart()`ot, átadva neki a gitárt és a darabszámot
- Abban esetben, ha egy terméket beletettünk a kosárba a gomb felirata _Add to cart_-ról _Update cart_-ra kell, hogy változzon
- Ehhez szükséges egy reaktív változó a `buttonText` melybe eltároljuk a kezdeti értéket, és módosítjuk, ha a terméket a kosárba helyeztük
- A `buttonText` értékét kell a gomb felirataként megjeleníteni

```js
<script setup>
import { ref } from 'vue'
import { useCartStore } from '../../store/cart'

defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)
const { cart, addItemToCart } = useCartStore()
const buttonText = ref('Add to cart')

function handleDescreaseCountClick() {
  count.value -= 1
}

function handleIncreaseCountClick() {
  count.value += 1
}

function handleCartButtonClick(guitar) {
  addItemToCart(guitar, count.value)
  buttonText.value = 'Update cart'
  console.log(cart.value)
}
</script>

<template>
  <div class="cart">
    <button @click="handleDescreaseCountClick">-</button>
    <input v-model="count" type="text" />
    <button @click="handleIncreaseCountClick">+</button>
    <button class="add-to-cart" @click="handleCartButtonClick(guitar)">
      {{ buttonText }}
    </button>
  </div>
</template>
```

- A `CartButton` komponenst akkor kell csak megjeleníteni a `GuitarItem`-en belül, ha az adott gitárból van készleten:
- Ezért egy `v-if` direktívát helyezek el rajta

```html
<CartButton v-if="guitar.stock > 0" :guitar="guitar" />
```
