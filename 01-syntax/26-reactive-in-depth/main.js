const { createApp, ref, reactive, toRef, toRefs } = Vue

const app = createApp({
  setup() {
    const userForm = ref()
    const formData = reactive({
      name: '',
      email: '',
    })

    // NOT VALID
    // formData = { name: 'Gáll Gergely', email: 'gergely.gall@training360.com' }

    // VALID
    formData.name = 'Gáll Elza'

    // VALID, NOT REACTIVE
    // const name = formData.name
    // const email = formData.email

    // VALID, REACTIVE
    // const name = ref(formData.name)
    // const email = ref(formData.email)

    // NOT VALID
    // const name = reactive(formData.name)
    // const email = reactive(formData.email)

    // VALID, REACTIVE, UPDATE, UGLY
    // const name = toRef(formData, 'name')
    // const email = toRef(formData, 'email')

    const { name, email } = toRefs(formData)

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
