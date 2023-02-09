# Jegyzet

## Tartalom

- A kosárban lévő termékek 9ssz darabszámának kalkulálása
- Kosár tartalmának módosításakor notification megjelenítése a felhasználónak

## Lépések

- A felső menüben a Cart mellett zárójelben meg kell jeleníteni a kosárban lévő termékek darabszámát
- A `totalPrice`hoz hasonlóan egy `totalCount` computed propertyt is létrehozok

```js
const totalCount = computed(() =>
  cart.value.reduce((prev, curr) => prev + curr.count, 0)
)
```

- Felhasználom a `MainNavigation` komponensen belül:

```js
<script setup>
import { useCartStore } from '../../store/cart'

const { totalCount } = useCartStore()
</script>
<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'guitarsList' }">
          Guitars
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'cart' }">
          Cart ({{ totalCount }})
        </router-link>
      </li>
    </ul>
  </nav>
</template>
```

- Még nem kapunk visszajelzést arról, ha a kosár tartalma módosul
- Használjuk a `CartButton` komponensél is a Toast-ot
- Importáljuk a `useToast` függvényt, hozzuk létre a `toast` változót

```js
import { useToast } from 'vue-toastification'
const toast = useToast()
```

- Majd a `handleCartButtonClick()` függvénynél használjuk is:

```js
function handleCartButtonClick(guitar) {
  const { id } = guitar
  const item = getItemById(id)
  if (!item && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
    toast.success('Item has been added to the cart')
  } else if (item?.stock !== count.value && count.value > 0) {
    changeItemCount(id, count.value)
    toast.success('Item count has been changed')
  } else if (item && count.value === 0) {
    removeFromCart(id)
    buttonText.value = 'Add to cart'
    toast.success('Item has been deleted form cart')
  }
}
```
