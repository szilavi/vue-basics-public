# Jegyzet

## Tartalom

- Vue direktívák
- A `v-html` direktíva

## Lépések

- Felmerülhet a kérdés, mi van olyan esetben, ha nem sima szöveget, hanem valamilyen html tartalmat szeretnénk a DOM-ba írni.
- A `main.js` fájt legyen a következő:

```js
const app = Vue.createApp({
  setup() {
    const title = '<span style="color: #42b883">Vue.js</span>'

    return {
      title,
    }
  },
})

app.mount('#app')
```

- Felvettünk egy új változót `title` névvel, ami html tag-et is tartalmaz, és a `setup()` `return` objektumánál is megadtuk a `title`-t
- Az `index.html` tartalma legyen a következő:

```html
<div id="app">
  <p>{{ title }}</p>
</div>
```

- Ha megnézzük böngészőben, akkor látható, hogy a `span` nem került parse-olásra, egyszerű szövegként jelenik meg
- Ha szeretnénk magát a html tartalmat lerenderelni, akkor nem a text interpolation szintaxisát használjuk, hanem a _v-html_ attribútumot
- Ehhez módosítsuk a kódot:

```html
<div id="app">
  <h1 v-html="title"></h1>
</div>
```

- A `v-html` attribútumot direktívának nevezzük
- A direktívák olyan speciális html attribútumok, melyek a keretrendszer számára értelmezhető utasításokat írnak le
- Látható, hogy nem text interpolationt használtam, hanem a `h1` tag-nek megadtam a `v-html` direktívát
- A `v-html`nek értéknek adtam a `title` változót
- Ha megnyitjuk böngészőben látható, hogy a `span` lerenderelődött
- A text interpolationt úgy kell elképzelni, mintha az adott elem `textContent`jét módosítanánk, míg a `v-html`el az `innerHTML`t
