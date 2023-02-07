const app = Vue.createApp({
  setup() {
    const logo = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      alt: 'Vue.js',
      width: 50,
    }

    return {
      logo,
    }
  },
})

app.mount('#app')
