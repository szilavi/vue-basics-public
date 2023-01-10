const app = Vue.createApp({
  setup() {
    const title = '<span style="color: #42b883">Vue.js</span>'
    return {
      title,
    }
  },
})

app.mount('#app')
