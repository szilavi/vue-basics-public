import { readonly, ref } from 'vue'

const cart = ref([])
export function useCartStore() {
  function addItemToCart(guitar, count) {
    cart.value.push = { ...guitar, count }
  }

  return {
    cart: readonly(cart),
    addItemToCart,
  }
}
