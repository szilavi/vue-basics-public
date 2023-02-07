# Jegyzet

## Tartalom

- A Vue reaktivitása
- A `ref` attribútum
- Események kezelése

## Lépések

- Készítsünk egy olyan mini alkalmazást, ami nem csinál mást, mint egy gombra kattintva növeli, egy másikra kattintva csökkenti egy változó értékét eggyel, és mindig az aktuális értéket írja ki

```js
const app = Vue.createApp({
  setup() {
    let counter = 0

    function increaseCounter() {
      counter++
      console.log(counter)
    }

    function decreaseCounter() {
      counter--
      console.log(counter)
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
})

app.mount('#app')
```

- Én még két `console.log()`-ot is elhelyeztem, hogy láthassuk, működik-e a két függvény
- A html kódban két gombra lesz szükségünk
- Az egyikre kattintva az `increaseCounter()` a másikra kattintva a `decreaseCounter()` hívódik meg
- Text interpolation segítségével pedig a kettő közé kiírjuk a `counter` aktuális értékét
- Míg a scriptben a változó értékét a `value`-en keresztül érjük el, a template-ben nincs szükség a `value` kiírására:
- A `v-on` direktíva használható események kötésére
- A `v-on` után kettősponttal megadom, milyen eseményt figyeljen (mint egy `addEventListener()`-nél), az egyelőségjel után pedig az, melyik függvény kerüljön meghívásra
- A függvénynek nem adunk át paramétert, nem kell kell a zárójeleket sem kitenni

```html
<div id="app">
  <h1>Counter</h1>
  <button v-on:click="decreaseCounter">-</button>
  {{ counter }}
  <button v-on:click="increaseCounter">+</button>
</div>
```

- Az egyszerűsített megadási mód szerint a `v-on:` elhagyható, és elég az esemény neve elé egy `@` karaktert írni:

```html
<div id="app">
  <h1>Counter</h1>
  <button @click="decreaseCounter">-</button>
  {{ counter }}
  <button @click="increaseCounter">+</button>
</div>
```

- Ebben az esetben hiába kattintunk a gombokra, a DOM-ban az érték nem fog módosulni, azonban a böngésző fejlesztői eszköztárában a konzolon látható, hogy igenis módosul a `counter`nek az értéke, mindössze csak a DOM-ban nem jelenik meg az új érték
- Tehát a függvények működnek, a JavaScripten belüli változások nem lesznek kihatással a DOM-ra
- A Vue a változókat nyomon tudja követni (de nekünk kell gondoskodni arról melyikeket), és ha módosul bármelyiknek az értéke, akkor minden egyes helyen, ahol erre a változóra hivatkozva van, szintén frissüljön az adat, frissüljön a DOM. Ez adja magát a reaktivitást.
- Amennyiben olyan primitív változót akarunk létrehozni, melynek a változásait a Vue nyomon követi, a `ref` speciális attribútumot kell használnunk
- A `ref`-nek paraméterként megadható a kezdőérték, hasonlóan, mint egy változó létrehozásánál az értékadás
- A `ref` egy objektummal tér vissza, amely egy tulajdonságot tartalmaz: `value`
- A példában lévő `counter` egy reaktív, mutálható változó lesz, melynek változását a Vue nyomon követi
- A `counter` értékét mindig a `value` tulajdonságon keresztül érjük el a JavaScript kódon belül
- A `ref` a `createApp`-hoz hasonlóan a Vue objektumon keresztül érhető el, ezért, hogy ne kelljen kiírni, hogy Vue, átstruktúrálást használva kimentem külön változóba őket
- Ezen kívül készítek két függvényt: `increaseCounter()`, `decreaseCounter()`, melyek semmi mást nem tesznek, mint a `counter` változó értékét növelik és csökkentik eggyel
- Mind a `counter`t, mind a függvényeket megadom a visszatérési értéknél:

```js
const app = Vue.createApp({
  setup() {
    const counter = Vue.ref(0)

    function increaseCounter() {
      counter.value++
      console.log(counter, counter.value)
    }

    function decreaseCounter() {
      counter.value--
      console.log(counter, counter.value)
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
})

app.mount('#app')
```

- **Megjegyzés**: a `counter.value` helyett írhatnánk azt is hogy: `unref(counter)`, de a gyakorlatban ezt nem szoktuk használni
- Hogy egyszerűsítsük a kódot, és ne kelljen mindenhol kiírni, hogy `Vue.`, tegyük a következőt:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const counter = ref(0)

    function increaseCounter() {
      counter.value++
    }

    function decreaseCounter() {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
})

app.mount('#app')
```

- De használatával kiemeltem külön változóba azokat a metódusokat, amikre ténylegesen szükségem lesz
- Teszteljük is le az alkalmazást
- A gombokra kattintva a `counter` értéke változik, és az aktuális érték kerül mindig kiírásra
- Mivel a Vue figyeli a változót, látja, hogy az értéke megváltozott, azt is nyilvántartja, hol van rá hivatkozás, és minden egyes helyen elvégzi a frissítést
- Ha a `counter` több helyen lenne használva, mindenhol frissíteni fogja
- Használjunk `ref()`-et ha szeretnénk, hogy a Vue nyomon kövesse a változó módosulásait, és minden helyen, ahol hivatkozunk rá frissítse az értéket
