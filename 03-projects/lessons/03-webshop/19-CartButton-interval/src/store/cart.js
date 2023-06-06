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
