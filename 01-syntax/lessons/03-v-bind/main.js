const app = Vue.createApp({
  setup() {
    const title = 'Long live Vue'
    return {
      title,
    }
  },
})

app.mount('#app')
