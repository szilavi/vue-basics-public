# Jegyzet

## Tartalom

- A kosárban lévő termékek összdarabszámának kalkulálása
- A CartButton módosítása, kezdeti érték beállíltása a kosárban lévő darabszámhoz
- Kosár tartalmának módosításakor notification megjelenítése a felhasználónak

## Lépések

- Ha Cart és a ProductList oldal között váltunk, azt vesszük észre, hogy hiába helyeztünk termékeket a kosárba,
a ProductList-re visszalépve olyan, mintha a kosár üres lenne
- Ez azért van, mert amikor átnavigálunk, a nem használt komponensek megsemmisülnek
- A CartButton pedig a count és a buttonText értékét mindig az alapértelmezett `0` és `Add to cart` értékekre állítja be
- Ennek megváltoztatásához csak le kell kérdeznünk, hogy a termék már a kosárban van-e és ennek megfelelően kell beállítani a két értéket

```js
const basketItem = getItemById(props.guitar.id)
const count = ref(basketItem?.count || 0)
const buttonText = ref(!basketItem ? 'Add to cart' : 'Udpate cart')
```

- A felső menüben a Cart mellett zárójelben meg kell jeleníteni a kosárban lévő termékek darabszámát
- A `totalPrice`-hoz hasonlóan egy `totalCount` computed property-t is létrehozok:

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
- Használjuk a `CartButton` komponensnél is a toastot
- Importáljuk a `useToast` függvényt, hozzuk létre a `toast` változót:

```js
import { useToast } from 'vue-toastification'
const toast = useToast()
```

- Majd a `handleCartButtonClick()` függvénynél használjuk is:

```js
function handleCartButtonClick(guitar) {
    const basketItem = getItemById(guitar.id)
    if (!basketItem && count.value > 0) {
        addItemToCart(guitar, count.value)
        buttonText.value = 'Update cart'
        toast.success('Item has been added to the cart')
    } else if (
        basketItem?.count != count.value &&
        basketItem?.stock >= count.value &&
        count.value > 0
    ) {
        changeItemCount(guitar.id, count.value)
        toast.success('Item count has changed')
    } else if (basketItem && count.value === 0) {
        removeFromCart(guitar.id)
        buttonText.value = 'Add to cart'
        toast.success('Item has been deleted from the cart')
    }
}
```
