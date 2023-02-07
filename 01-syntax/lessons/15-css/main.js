const app = Vue.createApp({
  setup() {
    const guitars = [
      {
        id: 1,
        name: 'Ibanez S6570SK-STB Prestige',
        stock: 0,
      },
      {
        id: 2,
        name: 'Fender AM Ultra Luxe Strat MN PRB',
        stock: 2,
      },
      {
        id: 3,
        name: 'FGN Expert Odyssey SBB',
        stock: 11,
      },
      {
        id: 4,
        name: 'Gibson SG Standard Reissue Cherry VOS',
        stock: 1,
      },
      {
        id: 5,
        name: 'Jackson SL2A MAH Pro Soloist UWH',
        stock: 25,
      },
    ]

    return {
      guitars,
    }
  },
})

app.mount('#app')
