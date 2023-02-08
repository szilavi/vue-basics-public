const { createApp, ref, watch, computed } = Vue

const app = createApp({
  setup() {
    const price = ref(0)
    const count = ref(0)
    const fullPrice = ref(0)

    const formattedFullPrice = computed(() =>
      fullPrice.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    )

    watch([price, count], () => {
      fullPrice.value = price.value * count.value
    })

    return {
      price,
      count,
      fullPrice,
      formattedFullPrice,
    }
  },
})

app.mount('#app')
