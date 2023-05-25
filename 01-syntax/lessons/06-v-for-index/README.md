# Jegyzet

## Tartalom

- Index használata a `v-for` direktívánál

## Lépések

- Mi a helyzet, ha az adott objektum nem rendelkezik `id` tulajdonsággal?

```js
const app = Vue.createApp({
  setup() {
    const frameworks = [
      {
        name: 'Vue',
      },
      {
        name: 'React',
      },
      {
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

- A `v-for` szintaxisát módosítjuk a következőképpen:

```html
<div id="app">
  <h1>Keretrendszerek</h1>
  <ul>
    <li v-for="(framework, index) in frameworks" :key="`framework-${index}`">
      {{ index + 1 }}. {{ framework.name }}
    </li>
  </ul>
</div>
```

- Az első alias továbbra is egy objektumot fog tartalmazni, azonban megadható egy második is, amely egy automatikusan generált, 0-tól induló egész szám
- Így az előző megoldással ekvivalens lesz a megoldásunk
- Természetesen az `index` helyett bármilyen más elnevezést (pl.: frameworkIndex) is használhatunk
- A prefix használata nem kötelező, a lényeg, hogy a `key` értéke egyedi legyen a `v-for`-on belül
