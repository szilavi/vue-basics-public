const { createApp, ref, computed } = Vue

const app = createApp({
  setup() {
    const price = ref(0)

    function increasePrice() {
      price.value++
    }

    function decreasePrice() {
      price.value--
    }

    const formattedPrice = computed(() =>
      price.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
    )

    return {
      price,
      increasePrice,
      decreasePrice,
      formattedPrice,
    }
  },
})

app.mount('#app')
