const { createApp, ref, computed, watch } = Vue

const app = createApp({
  setup() {
    const price = ref(0)
    const money = ref(5)
    const errorMessage = ref(null)

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

    watch(price, () => {
      errorMessage.value =
        price.value > money.value ? 'You dont have enough money!' : null
    })

    return {
      price,
      errorMessage,
      increasePrice,
      decreasePrice,
      formattedPrice,
    }
  },
})

app.mount('#app')
