# Jegyzet

## Tartalom

- `computed` property

## Lépések

- A `price` értékét nem egyszerű számformátumban akarom kiírni, hanem az alábbi formátumban: _€10.00_
- Tehát pénznem formátumban, 2 tizedesjegy hosszan, az elején az eurójellel
- Ezt többféleképp is megtehetjük
- A JS-kód változatlanul a következő:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const price = ref(0)

    function increasePrice() {
      price.value++
    }

    function decreasePrice() {
      price.value--
    }

    return {
      price,
      increasePrice,
      decreasePrice,
    }
  },
})

app.mount('#app')
```

- Elég a HTML-kódot módosítanunk:

```html
<div id="app">
  <h1>Price</h1>
  <button @click="decreasePrice">-</button>
  {{ price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' }) }}
  <button @click="increasePrice">+</button>
</div>
```

- Nemcsak egy változó értéke van az interpolationnél, hanem egy függvény visszatérési értéke kerül bele
- A `value`-t továbbra sem kell használni a template-ben, mindig csak a változó nevével hivatkozom rá
- Mivel itt is a `price`-t használom, és meghívom egy metódusát: ha a `price` értéke változik, a DOM-ban is változni fog az érték, azaz meghívódik a `toLocaleString()`, és a DOM-ban megjelenik a visszatérési értéke
- Ez működik, de nem a legszebb megoldás
- Szervezzük ki külön függvénybe a JS-kódban:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const price = ref(0)

    function increasePrice() {
      price.value++
    }

    function decreasePrice() {
      price.value--
    }

    function formattedPrice() {
      return price.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
    }

    return {
      price,
      increasePrice,
      decreasePrice,
      formattedPrice,
    }
  },
})

app.mount('#app')
```

- A formázást a `formattedPrice()` valósítja meg
- Mivel JS-en belül vagyunk, amikor a `price`-ra hivatkozunk, már kell a `value`
- Módosítsuk a template-et is:

```html
<div id="app">
  <h1>Price</h1>
  <button @click="decreasePrice">-</button>
  {{ formattedPrice() }}
  <button @click="increasePrice">+</button>
</div>
```

- Az alkalmazás továbbra is működik
- Mivel a `formattedPrice()`-on belül hivatkozunk a `price`-ra, ha a `price` módosul, a függvény meghívódik újra, és a friss érték kerül a DOM-ba
- Ez egy sokkal szebb megoldás, de van még tovább
- A Vue lehetőséget biztosít úgynevezett _computed property_ - számított érték - használatára
- Nézzük a kódot:

```js
const { createApp, ref, computed } = Vue

const app = createApp({
  setup() {
    const price = ref(0)

    function increasePrice() {
      price.value++
    }

    function decreasePrice() {
      price.value--
    }

    const formattedPrice = computed(() =>
      price.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
    )

    return {
      price,
      increasePrice,
      decreasePrice,
      formattedPrice,
    }
  },
})

app.mount('#app')
```

- Az első sor bővült a `computed()` függvénnyel, amelyet szintén a Vue-objektumból emelünk ki
- A `computed()` függvény mindig egy callback-et vár paraméterként, amely nem lesz más, mint egy _getter_ függvény, a visszatérési érték pedig egy _computed ref_

```html
<div id="app">
  <h1>Price</h1>
  <button @click="decreasePrice">-</button>
  {{ formattedPrice }}
  <button @click="increasePrice">+</button>
</div>
```

- Látható, hogy nem mint függvény használjuk a *computed property*-t, hanem mint változót, tehát nincsenek ott a zárójelek
- A különbség a _ref_ és a _computed property_ között, hogy _computed property_ esetében, hogy ha a JS-kódban hivatkozunk rá, akkor sem kell a _value_-t kiírni, ez automatikusan megtörténik
- A _computed property_ figyeli a benne felhasznált reaktív változók módosítását és automatikusan frissíti magát
- Bár használható a _computed property_ *setter*-ként is, a legjobb, ha csak *getter*-ként használjuk, azaz ne csináljon mást, csak más értékekkel dolgozva állítson elő egy új értéket: tehát csak kiszámítja és visszaadja ezt az értéket 
- **FONTOS**: soha ne legyen aszinkron kérés vagy DOM-manipuláció a *computed property*-n belül, a _getter_ mindig mentes a side effect-ektől
