# Jegyzet

## Tartalom

- A `v-for` direktíva
- A `key` attribútum

## Lépések

- Legyen egy egyszerű tömbünk, ami objektumokat tartalmaz:

```js
const app = Vue.createApp({
  setup() {
    const frameworks = [
      {
        id: 1,
        name: 'Vue',
      },
      {
        id: 2,
        name: 'React',
      },
      {
        id: 3,
        name: 'Angular',
      },
    ]

    return {
      frameworks,
    }
  },
})

app.mount('#app')
```

- Amennyiben szeretnénk minden egyes objektum `name` tulajdonságát beleírni egy listába különálló listaelemeként, akkor egy ciklusra lenne szükségünk
- A Vue a `v-for` direktívát használja ilyen estben

```html
<div id="app">
  <ul>
    <li v-for="framework in frameworks">
      {{framework.id}}. {{ framework.name }}
    </li>
  </ul>
</div>
```

- A `v-for` a háttérben az `Object.keys()` metódust használja, és mint egy _for in_ ciklussal bejárjuk az elemeket
- Jelen esetben egy tömbünk van, így a kulcsok a tömb indexei lesznek
- Az `li` fog ismétlődi a tömb elemeinek számával, azaz kertrendszerek számával megegyező alkalommal, azaz összesen 3 darab `li` tag lesz
- A `framework` változóba nem a kulcsok, hanem az elemek kerülnek
- A natív szintaktikához közelebb álló `of` is használható az `in` helyett, a működésen nem fog változtatni
- A `key`-t nem kötelező, de ajánlott (best practice) mindig megadni:

```html
<div id="app">
  <ul>
    <li v-for="framework in frameworks" :key="framework.id">
      {{framework.id}}. {{ framework.name }}
    </li>
  </ul>
</div>
```

- A `key` egy egyedi azonosítót rendel az elemhez, ami a későbbiekben jut fontosabb szerephez, amikor az adatok változni is fognak
- A `key` segítségével a Vue.js könnyebben nyomon tudja követni a változásokat
- A `key` értéknek minden `v-for`-on belül (tehát nem globálisa) egyedi értéknek kell lennie
- Az egyik legegyszerűbb, ha a `key`-nek az adott elem `id`-ját adjuk értékül
- Nem kötelező, de egy prefixel ki is egészíthetjük az azonosító értékét: `framework-${framework.id}`
- Böngészőben ellenőrizve látható, hogy létrejött a 3 `li` elem benne a keretrendszerek neveivel
