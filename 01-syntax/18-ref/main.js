const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const counter = ref(0)

    function increaseCounter() {
      // unref(counter)
      counter.value++
      console.log(counter, counter.value)
    }

    function decreaseCounter() {
      counter.value--
      console.log(counter, counter.value)
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
})

app.mount('#app')
