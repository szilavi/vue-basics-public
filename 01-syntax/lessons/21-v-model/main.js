const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')

    return {
      name,
    }
  },
})

app.mount('#app')
