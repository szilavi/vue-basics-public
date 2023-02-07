const { createApp, reactive } = Vue

const app = createApp({
  setup() {
    const guitars = reactive([
      {
        id: 1,
        title: 'Ibanez S6570SK-STB Prestige',
        stock: 0,
      },
      {
        id: 2,
        title: 'Fender AM Ultra Luxe Strat MN PRB',
        stock: 2,
      },
      {
        id: 3,
        title: 'FGN Expert Odyssey SBB',
        stock: 11,
      },
      {
        id: 4,
        title: 'Gibson SG Standard Reissue Cherry VOS',
        stock: 1,
      },
      {
        id: 5,
        title: 'Jackson SL2A MAH Pro Soloist UWH',
        stock: 25,
      },
    ])

    return {
      guitars,
    }
  },
})

app.mount('#app')
