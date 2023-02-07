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
const { cart, addItemToCart, getItemById, changeItemCount } = useCartStore()
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

function handleDescreaseCountClick() {
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
   * delete:
   *  - ha a kosárban van
   *  - a count === 0
   */
  const { id } = guitar
  const item = getItemById(id)
  if (!item && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
  } else if (item?.stock !== count.value && count.value > 0) {
    changeItemCount(id, count.value)
  }
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
