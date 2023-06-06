# Jegyzet

## Tartalom

- A `watch` function

## Lépések

- A _computed property_ esetében a side effect kerülendő, de mégis van, hogy szükség lenne rá, akár egy változó módosítására vagy egy aszinkron hívásra
- A Vue ilyen esetben a *watcher*-t, azaz a `watch()` függvényt használja
- A `watch()` segítségével figyelhetjük, ha egy változó értéke módosul, és ilyenkor meghívunk egy függvényt
- Az alapszintaktika az alábbi kódban látható:

```js
const { createApp, ref, computed, watch } = Vue

const app = createApp({
  setup() {
    const price = ref(0)
    const money = ref(5)
    const errorMessage = ref(null)

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

    watch(price, () => {
      errorMessage.value =
        price.value > money.value ? `You do not have enough money!` : null
    })

    return {
      price,
      errorMessage,
      increasePrice,
      decreasePrice,
      formattedPrice,
    }
  },
})

app.mount('#app')
```

- A `watch`-ot szintén kiemeltem a Vue-objektumból
- Felvettem egy `money` változót, ez reprezentálja a pénzünket
- Felvettem egy `errorMessage` változót is, ez tartalmazza a hibaüzenetet, ha túl sokat költenénk
- A `watch()` függvény első paramétere a változó (vagy tömbszerűen megadva, akár több is), amelynek a módosulását figyelni akarom, a második pedig egy callback, amely lefut ebben az esetben
- Ha a `price` értéke módosul, lefut a callback
- Ha a `price` értéke nagyobb volt, mint a `money`, akkor a hibaüzenet értéke beállításra kerül
- A HTML-kód:

```html
<div id="app">
  <div id="app">
    <h1>Price</h1>
    <button @click="decreasePrice">-</button>
    {{ formattedPrice }}
    <button @click="increasePrice">+</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</div>
```

- A bekezdés, amelyen belül a hibaüzenet megjelenik, feltételesen van lerenderelve
- Amint a `price` értéke átlépi a `money` értékét, a hibaüzenet megjelenik
- Hasonló működést valósít meg a `watchEffect` is, a leckék során nem foglalkozunk vele
- **Megjegyzés**: Szebb lenne a `v-if` helyett a `v-show` használata, hiszen hol el kell rejteni, hol meg kell jeleníteni az adott üzenetet
