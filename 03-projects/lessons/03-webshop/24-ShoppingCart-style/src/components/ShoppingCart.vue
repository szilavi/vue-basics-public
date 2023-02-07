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

<style scoped>
.cart {
  display: flex;
  align-items: center;
  flex-direction: column;
}

th,
td {
  padding: 0.25rem 1rem;
}

tfoot {
  font-weight: bold;
  font-size: 1.25rem;
  text-align: right;
}
</style>
