<script setup>
import { ref } from 'vue'
import { useCartStore } from '../store/cart'

defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)
const { cart, addItemToCart } = useCartStore()
const buttonText = ref('Add to cart')

function handleDecreaseCountClick() {
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
    <button @click="handleDecreaseCountClick">-</button>
    <input v-model="count" type="text" />
    <button @click="handleIncreaseCountClick">+</button>
    <button class="add-to-cart" @click="handleCartButtonClick(guitar)">
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
button {
  padding: 0.25rem 1rem;
  background: var(--dark);
  border: 1px solid var(--dark);
  color: var(--light);
}

button:active {
  background: var(--light);
  color: var(--dark);
}

button:hover {
  cursor: pointer;
}

input {
  border: 1px solid var(--dark);
  padding: 0.25rem;
  border-radius: 0;
  width: 5ch;
  text-align: center;
}

.add-to-cart {
  margin: 0 0 0 1rem;
}
</style>
