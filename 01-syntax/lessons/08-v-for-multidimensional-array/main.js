const app = Vue.createApp({
  setup() {
    const frameworks = [
      ['Vue', 'React', 'Angular'],
      ['Laravel', 'Symfony', 'Yii'],
      ['Flask', 'Django', 'FastAPI'],
    ]
    return {
      frameworks,
    }
  },
})

app.mount('#app')
