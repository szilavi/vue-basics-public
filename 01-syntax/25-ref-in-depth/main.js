const { createApp, ref, toRef, toRefs } = Vue

const app = createApp({
  setup() {
    const userForm = ref()
    const formData = ref({
      name: '',
      email: '',
    })

    // VALID
    formData.value = {
      name: 'Gáll Gergely',
      email: 'gergely.gall@training360.com',
    }

    // VALID
    formData.value.name = 'Gáll Elza'

    // VALID, NOT REACTIVE
    // const name = formData.value.name
    // const email = formData.value.email

    // VALID, REACTIVE, UGLY
    // const name = ref(formData.value.name)
    // const email = ref(formData.value.email)

    // VALID, REACTIVE, UGLY, UPDATED
    // const name = toRef(formData.value, 'name')
    // const email = toRef(formData.value, 'email')

    const { name, email } = toRefs(formData.value)

    function handleSubmit() {
      console.log(formData)
      userForm.value.reset()
    }

    return {
      name,
      email,
      userForm,
      handleSubmit,
    }
  },
})

app.mount('#app')
