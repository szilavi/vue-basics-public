import { ref, readonly } from 'vue'

const cart = ref([])

export function useCartStore() {
  function getItemIndexById(id) {
    return cart.value.findIndex((item) => item.id === id)
  }

  function getItemById(id) {
    return cart.value.find((item) => item.id === id)
  }

  function addItemToCart(item, count) {
    cart.value.push({ ...item, count })
  }

  function changeItemCount(id, count) {
    const index = getItemIndexById(id)
    cart.value[index].count = count
  }

  function removeFromCart(id) {
    const index = getItemIndexById(id)
    cart.value.splice(index, 1)
  }

  return {
    cart: readonly(cart),
    addItemToCart,
    getItemById,
    changeItemCount,
    removeFromCart,
  }
}
