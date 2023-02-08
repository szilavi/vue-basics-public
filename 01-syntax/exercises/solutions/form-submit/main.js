const { createApp, ref, computed } = Vue

const app = createApp({
  setup() {
    const name = ref('')

    function submitForm() {
      console.log(name.value)
      name.value = ''
    }

    return {
      name,
      submitForm,
    }
  },
})

app.mount('#app')
