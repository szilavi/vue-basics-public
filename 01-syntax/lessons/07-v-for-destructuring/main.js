const app = Vue.createApp({
  setup() {
    const frameworks = [
      {
        id: 1,
        name: 'Vue',
        relaseDate: '2014-02-24T23:00:00.000Z',
        color: '#42b883',
      },
      {
        id: 2,
        name: 'React',
        relaseDate: '2013-05-28T22:00:00.000Z',
        color: '#61dafb',
      },
      {
        id: 3,
        name: 'Angular',
        relaseDate: '2016-09-14T22:00:00.000Z',
        color: '#dd1b16',
      },
    ]

    return {
      frameworks,
    }
  },
})

app.mount('#app')
