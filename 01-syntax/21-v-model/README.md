# Jegyzet

## Tartalom

- Kétirányú adatkötés
- A `v-model` direktíva

## Lépések

- Nézzük meg, hogyan lehetséges egy JS változó értékét, és egy űrlapelemet összekötni
- Egyetlen egy reaktív változót hozok csak létre `name` névvel

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')

    return {
      name,
    }
  },
})

app.mount('#app')
```

- Az input elem esetében a `value`t attribute bindinggal össze kell kötnöm a `name` változóval
- A `name` értékét az input alá ki is íratom:

```html
<div id="app">
  <form action="">
    <div class="form-group">
      <label for="name">Név: </label>
      <input type="text" name="name" id="name" :value="name" />
      <p>{{ name }}</p>
    </div>
  </form>
</div>
```

- Jelenleg ha a `name` értéke változik, az input value-ja is változni fog
- Hogy erről megbizonyosodjuk, tegyünk, egy setInterval-t a kódba:

```js
const { createApp, ref, watch } = Vue

const app = createApp({
  setup() {
    const name = ref('')

    setInterval(() => (name.value = 'Gáll Gergely'), 2000)

    return {
      name,
    }
  },
})

app.mount('#app')
```

- **Megjegyzés**: Valós alkalmazásban így ne használjuk , mindig burkoljuk egy függvénybe, ha szükség van rá!
- Másodpercenként változik a `name` értéke és egy a DOM-ban is megjelenik
- Már csak azt kell elérnünk, hogy ez az adatkötés ne egyirányú legyen, azaz, ha az inputba beírok valami, akkor a `name` vegye azt fel értékül
- Ehhez egészítsük ki a HTML kódot:

```html
<div id="app">
  <form action="">
    <div class="form-group">
      <label for="name">Név: </label>
      <input
        type="text"
        name="name"
        id="name"
        :value="name"
        @input="event => name = event.target.value"
      />
      <p>{{ name }}</p>
    </div>
  </form>
</div>
```

- Egy egyszerű event bindingot használtam
- Az árlapelem input eseményére beállítom a `name` értékét, tehát ha az őrlapelem értéke módosul, akkor a `name` értéke is, és azt is láthatjuk, hogy a `setInterval` ha módosítja a `name` értékét, akkor az input `value`ja is módosul
- Ezt hívjuk kétirányú adatkötésnek
- Hogy ne legyen zavaró, töröljük a JS kódból a `setInterval`t
- Ami még nem szép, hogy az input eseményhez inline rendeltem a függvényt ezt kiszervezhetjük külön függvénybe

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')

    function handleNameChange(event) {
      name.value = event.target.value
    }

    return {
      name,
      handleNameChange,
    }
  },
})

app.mount('#app')
```

- Módosítom a HTML-t:

```html
<div id="app">
  <form action="">
    <div class="form-group">
      <label for="name">Név: </label>
      <input
        type="text"
        name="name"
        id="name"
        :value="name"
        @input="handleNameChange($event)"
      />
      <p>{{ name }}</p>
    </div>
  </form>
</div>
```

- Az event object paraméterként történő átadásánál `$event`ként hivatkozunk rá, egy speciális változóként kezeli a Vue
- A Vue lehetőséget biztosít a kétirányú adatkötés egyszerűbb megvalósítására a `v-model` direktívával
- Nincs szükség a `handleNameChange` függvényre:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')

    return {
      name,
    }
  },
})

app.mount('#app')
```

- A HTMNL kódnál pedig a `v-model` direktívát használom a `value`, és az `input` binding kiváltására

```html
<div id="app">
  <form action="">
    <div class="form-group">
      <label for="email">Név: </label>
      <input type="text" name="name" id="name" v-model="name" />
      <p>{{ name }}</p>
    </div>
  </form>
</div>
```
