# Jegyzet

## Tartalom

- A `v-for` `key` alias

## Lépések

- Láthattuk, hogy a `v-for` direktíva esetében egy vagy két aliast is megadhattunk
- Lehetőségünk van azonban egy harmadik használatára is
- A három alias sorban a következő: `value`, `key`, `index`
- Legyen a következő a `main.js` tartalma:

```js
const app = Vue.createApp({
  setup() {
    const framework = {
      id: 1,
      name: 'Vue',
      relaseDate: '2014-02-24T23:00:00.000Z',
      color: '#42b883',
    }

    return {
      framework,
    }
  },
})

app.mount('#app')
```

- Az `index.html`-be írjuk ki a `framework` objektum összes kulcsát, és kettősponttal utána az értékét
- Mindegyik kulcs érték pár egy listaelem legyen:

```html
<div id="app">
  <ul>
    <li v-for="(value, key, index) in framework" :key="index">
      {{ key }}: {{ value }}
    </li>
  </ul>
</div>
```

- A `key` alias (nem összekeverendő a `key` attribútummal) a kulcsokat, a `value` pedig az értékeket tartalmazza
- Az egyedi `key` attribútum esetében használom az automatikusan generált index-et
- Az `index` helyett lehetne használni akár a `key` aliast értékét is a key attribútumnál, ha biztosak vagyunk abban, hogy véletlen sincs valamilyen hiba miatt kétszer ugyanolyan nevű tulajdonság
