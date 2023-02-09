# Jegyzet

## Tartalom

- Style binding objektumokkal

## Lépések

- Style binding esetében akármennyi CSS tulajdonsághoz rendelhetünk értéket
- Legyen három darab objektumunk, amikben a `color`, és a `fontSize` is meg van adva:

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

    const outOfStock = {
      color: 'red',
      fontSize: '1.25rem',
    }

    const onlyFewLeftInStock = {
      color: 'orange',
      fontSize: '1.5rem',
    }
    const inStock = {
      color: 'green',
      fontSize: '1rem',
    }

    return {
      guitars,
      outOfStock,
      onlyFewLeft,
      inStock,
    }
  },
})

app.mount('#app')
```

- Ebben az esetben a kapcsoszárójelek között vesszővel elválasztva több css tulajdonság nevét és értékként egy JavaScript objektum tulajdonság az értékét rendeljük egymáshoz

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span
        v-if="guitar.stock === 0"
        :style="{color: outOfStock.color, fontSize: outOfStock.fontSize}"
      >
        Out of stock
      </span>
      <span
        v-else-if="guitar.stock < 3"
        :style="{color: onlyFewLeftInStock.color, fontSize: onlyFewLeftInStock.fontSize}"
      >
        Last chance, only {{ guitar.stock }} left in stock
      </span>
      <span v-else :style="{color: inStock.color, fontSize: inStock.fontSize}">
        In stock
      </span>
    </div>
  </div>
</div>
```

- Amit még észrevehető, hogy a `font-size` nem kebab-case van írva, hanem camelCase
- Vue esetében ez az ajánlott elnevezési konvenció
- Ilyen esetben, amikor egy objektum összes tulajdonságát meg akarjuk feleltetni egy-egy css tulajdonságnak lehetőség van egy egyszerűbb megadási módra:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span v-if="guitar.stock === 0" :style="outOfStock"> Out of stock </span>
      <span v-else-if="guitar.stock < 3" :style="onlyFewLeftInStock">
        Last chance, only {{ guitar.stock }} left in stock
      </span>
      <span v-else :style="inStock">In stock</span>
    </div>
  </div>
</div>
```

- Egyszerűen elhagyjuk a kapcsos zárójeleket és csak az objektum nevét adjuk meg
