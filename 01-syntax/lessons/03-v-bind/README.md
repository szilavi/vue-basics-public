# Jegyzet

## Tartalom

- A `v-bind` direktíva használata egy attribútum kötésénél

## Lépések

- A következő hasznos direktíva a `v-bind` direktíva, aminek a segítségével html attribútumoknak tudunk értéket adni JavScriptből (_attribute binding_)
- A Vue direktívák neve mindig a _v-_ előtaggal kezdődik
- Az _main.js_ tartalma legyen a következő:

```js
const app = Vue.createApp({
  setup() {
    const title = 'Long live Vue'
    return {
      title,
    }
  },
})

app.mount('#app')
```

- Az `index.html` tartalma legyen a következő:

```html
<h1 v-bind:title="title">Vue.js</h1>
```

- A v-bind attribútum után kettősponttal megadjuk, melyik html attribútumhoz szeretnék értéket hozzárendelni, majd megadom értéknek a JavaScript változó nevét
- Ezzel azt értem el, hogy a böngészőben ha a címsor fölé viszem a kurzort megjelenik a _Long live Vue!_ szöveg, a devtoolban pedig az elemet megvizsgálva a következő látható:

```html
<h1 title="Long live Vue!"></h1>
```

- A kódot rövidíthetjük is, elég csak a következőt írnunk:

```html
<h1 :title="title">Vue.js</h1>
```
