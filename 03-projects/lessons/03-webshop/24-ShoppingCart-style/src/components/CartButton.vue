<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '../store/cart'

const props = defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)
const { cart, addItemToCart, getItemById, changeItemCount, removeFromCart } =
  useCartStore()
const buttonText = ref('Add to cart')

watch(count, () => {
  const minCount = 0
  const maxCount = props.guitar.stock
  if (count.value < minCount) {
    count.value = minCount
  } else if (count.value > maxCount) {
    count.value = maxCount
  }
})

function handleDecreaseCountClick() {
  count.value -= 1
}

function handleIncreaseCountClick() {
  count.value += 1
}

function handleCartButtonClick(guitar) {
  /**
   * add:
   *  - ha még nincs a kosárban
   *  - count > 0
   * modify:
   *  - ha már a kosárban van
   *  - a count nem 0
   *  - ha a count nem egyenlő a kosárban lévő darabszámmal
   *  - ha van még készleten
   * delete:
   *  - ha a kosárban van
   *  - a count === 0
   */
  const basketItem = getItemById(guitar.id)
  if (!basketItem && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
  } else if (
    basketItem?.count != count.value &&
    basketItem?.stock >= count.value &&
    count.value > 0
  ) {
    changeItemCount(guitar.id, count.value)
  } else if (basketItem && count.value === 0) {
    removeFromCart(guitar.id)
    buttonText.value = 'Add to cart'
  }
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
