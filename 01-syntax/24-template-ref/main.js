const { createApp, ref, reactive } = Vue

const app = createApp({
  setup() {
    const userForm = ref()
    const formData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(formData)
      userForm.value.reset()
    }

    return {
      formData,
      userForm,
      handleSubmit,
    }
  },
})

app.mount('#app')
