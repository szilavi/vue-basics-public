import { readonly, ref } from 'vue'

const cart = ref([])
export function useCartStore() {
  function getItemById(id) {
    return cart.value.find((guitar) => guitar.id === id)
  }

  function addItemToCart(guitar, count) {
    cart.value.push = { ...guitar, count }
  }

  return {
    cart: readonly(cart),
    addItemToCart,
    getItemById,
  }
}
