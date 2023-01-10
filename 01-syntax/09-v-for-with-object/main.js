const app = Vue.createApp({
  setup() {
    const framework = {
      id: 1,
      name: 'Vue',
      relaseDate: '2014-02-24T23:00:00.000Z',
      color: '#42b883',
    }

    return {
      framework,
    }
  },
})

app.mount('#app')
