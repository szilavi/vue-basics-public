# Jegyzet

## Tartalom

- Style binding

## Lépések

- Nemcsak egyes attribútumokhoz tudjuk egy-egy változó értékét hozzárendelni, hanem lehetőség van arra is, hogy azt egy CSS-tulajdonsághoz rendeljük hozzá inline
- Legyen három változónk, és adjuk nekik értéknek a következőket:

```js
const outOfStockColor = 'red'
const onlyFewLeftInStockColor = 'orange'
const inStockColor = 'green'
```

- Nem beégetem a HTML-be a színt, hanem egy változóból fogja azt kapni (ha ennek a változónak az értéke módosul, akkor a megjelenő szöveg színe is változni fog)
- A teljes JavaScript-kód:

```js
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

    const outOfStockColor = 'red'
    const onlyFewLeftInStockColor = 'orange'
    const inStockColor = 'green'

    return {
      guitars,
      outOfStockColor,
      onlyFewLeftInStockColor,
      inStockColor,
    }
  },
})

app.mount('#app')
```

- A HTML pedig:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span v-if="guitar.stock === 0" :style="{color: outOfStockColor}">
        Out of stock
      </span>
      <span
        v-else-if="guitar.stock < 3"
        :style="{color: onlyFewLeftInStockColor}"
      >
        Last chance, only {{ guitar.stock }} left in stock
      </span>
      <span v-else :style="{color: inStockColor}">In stock</span>
    </div>
  </div>
</div>
```

- Jelenleg inline stílusmegadást használtam, természetesen class is használható
- A style binding esetében a `:style=` után kapcsos zárójelben adjuk meg, hogy melyik CSS-tulajdonság milyen értéket kapjon, azaz jelen esetben melyik JavaScript-változónak az értékét kapja meg
