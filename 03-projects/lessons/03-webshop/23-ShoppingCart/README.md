# Jegyzet

## Tartalom

- A `ShoppingCart` komponens
- Kosár tartalmának összára

## Lépések

- A `ShoppingCart` komponens fogja egy táblázatba kilistázni a kosárban lévő termékeket, a darabszámot, az árat és egy összárat
- A termékenkénti összesített árat egyszerűen ki tudjuk számolni, az a kosárban lévő darabszám és egységár szorzata
- A kosár teljes tartalmának összára egy kicsit bonyolultabb
- Ezt célszerű akár a cart store-on belül kiszámolni egy computed property-ben:

```js
const totalPrice = computed(() =>
  cart.value.reduce((prev, curr) => prev + curr.count * curr.price, 0)
)
```

- Ezt a `totalPrice`-t aztán fel tudjuk már használni:

```js
<script setup>
import { useCartStore } from '../../store/cart.js'
import formatPrice from '../utils/formatPrice.js'

const { cart, totalPrice } = useCartStore()
</script>
<template>
  <div class="cart">
    <h1>Cart summarize</h1>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Count</th>
          <th>Sum price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.count }}</td>
          <td>{{ formatPrice(item.count * item.price) }}</td>
        </tr>
      </tbody>
    </table>
    <tfoot>
      <tr>
        <td colspan="3">{{ formatPrice(totalPrice) }}</td>
      </tr>
    </tfoot>
  </div>
</template>
```

- Már csak a `CartView` komponensen belül kell importálnom:

```js
<script setup>
import ShoppingCart from '../components/ShoppingCart.vue'
</script>
<template>
  <ShoppingCart />
</template>

<style scoped></style>

```
