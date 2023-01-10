const app = Vue.createApp({
  setup() {
    const message = 'Vue is sooo cooool!'
    return {
      message,
    }
  },
})

app.mount('#app')
