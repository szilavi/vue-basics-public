const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const color = ref('#ffffff')

    return {
      color,
    }
  },
})

app.mount('#app')
