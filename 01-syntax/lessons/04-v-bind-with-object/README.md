# Jegyzet

## Tartalom

- A `v-bind` direktíva használata több attribútum kötésénél
- A `v-bind` rövidített használati módja

## Lépések

- Egy HTML-elemnél több *attribute binding*-ot is tudunk használni
- Újfent egészítsük ki a `main.js` fájlt:

```js
const app = Vue.createApp({
  setup() {
    const src =
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
    const alt = 'Vue logo'
    const width = 50

    return {
      src,
      alt,
      width,
    }
  },
})

app.mount('#app')
```

- Használjunk ebben az esetben több *attribute binding*-ot az elemen:

```html
<div id="app">
  <img :src="src" :alt="alt" :width="width" />
</div>
```

- A tulajdonságokat akár egy objektumban is elhelyezhetjük:

```js
const app = Vue.createApp({
  setup() {
    const logo = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      alt: 'Vue logo',
      width: 50,
    }

    return {
      logo,
    }
  },
})

app.mount('#app')
```

- Majd módosítsuk a HTML-fájlt:

```html
<div id="app">
  <img :src="logo.src" :alt="logo.alt" :width="logo.width" />
</div>
```

- Jelen esetben mind az `src`, az `alt` és a `width` a logo objektum egy-egy tulajdonságát kapja meg értéknek
- Ilyen esetben, ha az attribútumok értékeit nem külön 3 darab változóban tároljuk, hanem egy objektumban (bevált gyakorlat), akkor a következőképp egyszerűsíthetjük a kódot:

```html
<img v-bind="logo" />
```

- Ebben az esetben az `src` attribútum az `src` tulajdonság, az `alt` attribútum az `alt` tulajdonság, a `width` attribútum a `width` tulajdonság értékét kapja meg
- Csak arra kell figyelni, hogy az objektum tulajdonságainak elnevezései egyezzenek meg a HTML-attribútumok elnevezéseivel
