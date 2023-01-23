import { readonly, ref } from 'vue'

const cart = ref([])
export function useCartStore() {
  function getItemById(id) {
    return cart.value.find((guitar) => guitar.id === id)
  }

  function getItemIndexById(id) {
    return cart.value.findIndex((guitar) => guitar.id === id)
  }

  function addItemToCart(guitar, count) {
    cart.value.push = { ...guitar, count }
  }

  function chageItemCount(id, count) {
    const index = getItemIndexById(id)
    cart.value[index].count = count
  }

  return {
    cart: readonly(cart),
    addItemToCart,
    getItemById,
    chageItemCount,
  }
}
