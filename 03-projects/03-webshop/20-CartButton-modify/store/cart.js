import { readonly, ref } from 'vue'

const cart = ref([])
export function useCartStore() {
  function findItemIndexById(id) {
    return cart.value.findIndex((guitar) => guitar.id === id)
  }

  function findItemById(id) {
    return cart.value.find((guitar) => guitar.id === id)
  }

  function isCartContainsItem(id) {
    return cart.value.some((guitar) => guitar.id === id)
  }

  function addItemToCart(guitar, count) {
    cart.value.push = { ...guitar, count }
  }

  function changeItemCount(guitar, count) {
    const index = findItemIndexById(guitar.id)
    cart.value[index].count = count
  }

  return {
    cart: readonly(cart),
    addItemToCart,
    changeItemCount,
    isCartContainsItem,
    findItemById,
  }
}
