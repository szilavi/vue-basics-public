const app = Vue.createApp({
  setup() {
    const frameworks = [
      {
        id: 1,
        name: 'Vue',
      },
      {
        id: 2,
        name: 'React',
      },
      {
        id: 3,
        name: 'Angular',
      },
    ]
    return {
      frameworks,
    }
  },
})

app.mount('#app')
