const { createApp, reactive } = Vue

const app = createApp({
  setup() {
    const formData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(formData)
    }

    return {
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
