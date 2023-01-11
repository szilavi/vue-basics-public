# Jegyzet

## Tartalom

- A `v-if` direktíva
- A `template` tag

## Lépések

- Legyen egy egyszerű tömbünk néhány termékkel:

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

    return {
      guitars,
    }
  },
})

app.mount('#app')
```

- Szeretném kiíratni a termékek nevét egy-egy bekezdésbe, de csak azokét, melyek vannak készleten, tehát a `stock` értéke nem nulla
- Ehhez használhatjuk a `v-if` direktívát
- A `v-if` direktíva feltételes renderelést valósít meg, azaz ha a feltétel hamis, akkor fogja lerenderelni az adott html részt, ha a feltétel igaz
- A `v-if` direktívát ne használjuk a `v-for`-al együtt, mert a `v-for` magasabb prioritású művelet, így nem elvárt működést eredményezhet, erről részletesebben: [Avoid v-if with v-for](https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <p v-if="guitar.stock > 0">{{ guitar.name }}</p>
    </div>
  </div>
</div>
```

- Így a böngészőben látható, hogy csak 4 gitár neve jelenik meg, ahol a `stock` 0 volt, nincs kiírva
- Azonban ha megnézzük a böngésző fejlesztői eszköztárában azt látjuk, hogy a `guitars` osztályú elemen belül 5 darab div van, amiből az első üres
- Azért 5 darab van, mert a div, ahol a v-for-t megadtam 5 alkalommal fog lerenderelődni, azonban a tartalma, a `guitar` osztályú elem az elsőben nem lesz benne, hiszen nem felel meg a feltételnek
- A legszebb az lenne, ha ilyen esetben maga az üres `div` se jelenne meg
- Ezt úgy oldhatjuk meg, hogy kicseréljük a `div`-et `template` tagre

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <template v-for="guitar in guitars" :key="guitar.id">
      <p v-if="guitar.stock > 0">{{ guitar.name }}</p>
    </template>
  </div>
</div>
```

- Maga a template tag nem renderelődik le, csak a tartalma
- A későbbiekben ezt sokat használjuk még
