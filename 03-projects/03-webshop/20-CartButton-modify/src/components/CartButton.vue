<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '../../store/cart'

const props = defineProps({
  guitar: {
    type: Object,
    required: true,
  },
})

const count = ref(0)
const buttonText = ref('Add to cart')
const {
  cart,
  addItemToCart,
  changeItemCount,
  isCartContainsItem,
  findItemById,
} = useCartStore()

watch(count, () => {
  const minCount = 0
  const maxCount = props.guitar.stock
  if (count.value > maxCount) {
    count.value = maxCount
  } else if (count.value < minCount) {
    count.value = minCount
  }
})

function handleDescreaseCountClick() {
  count.value -= 1
}

function handleIncreaseCountClick() {
  count.value += 1
}

function handleCartButtonClick() {
  // add: ha nincs a kosárban, és a count > 0
  if (!isCartContainsItem(props.guitar.id) && count.value > 0) {
    addItemToCart(props.guitar, count.value)
    buttonText.value = 'Update cart'
  } else if (
    isCartContainsItem(props.guitar.id) &&
    findItemById(props.guitar.id).count !== count.value
  ) {
    changeItemCount(props.guitar.id, count.value)
  }
  console.log(cart.value)
}
</script>

<template>
  <div class="cart">
    <button @click="handleDescreaseCountClick">-</button>
    <input v-model="count" type="text" />
    <button @click="handleIncreaseCountClick">+</button>
    <button class="add-to-cart" @click="handleCartButtonClick">
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

buttom:hover {
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
