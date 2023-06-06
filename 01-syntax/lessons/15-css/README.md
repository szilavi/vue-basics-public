# Jegyzet

## Tartalom

- CSS használata

## Lépések

- Ha nem akarjuk bonyolítani az életünket, és a lehetőség van arra, hogy valamit CSS-ből oldjunk meg JavaScript helyett, akkor mindig tegyük azt
- Ha a CSS-tulajdonságok, amelyeket hozzá akarunk rendelni az elemekhez, statikusak lesznek, akkor a legegyszerűbb, ha felveszünk egy-egy class-t
- Hozzuk létre a _style.css_ fájlt, a tartalma pedig legyen a következő:

```css
.out-of-stock {
  color: red;
  font-size: 1.25rem;
}

.only-few-left {
  color: orange;
  font-size: 1.5rem;
}

.in-stock {
  color: green;
  font-size: 1rem;
}
```

- Alakítsuk át a HTML-kódot:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span v-if="guitar.stock === 0" class="out-of-stock"> Out of stock </span>
      <span v-else-if="guitar.stock < 3" class="only-few-left">
        Last chance, only {{ guitar.stock }} left in stock
      </span>
      <span v-else class="in-stock">In stock</span>
    </div>
  </div>
</div>
```

- A felesleges részeket töröljük a JS-ből:

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

- Így, statikus tulajdonságok használata esetén inkább szervezzük ki a kódot CSS-osztályokba
