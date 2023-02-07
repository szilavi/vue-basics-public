const app = Vue.createApp({
  setup() {
    const frameworks = [
      {
        name: 'Vue',
      },
      {
        name: 'React',
      },
      {
        name: 'Angular',
      },
    ]
    return {
      frameworks,
    }
  },
})

app.mount('#app')
