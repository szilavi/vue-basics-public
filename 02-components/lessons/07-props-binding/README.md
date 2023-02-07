# Jegyzet

## Tartalom

- `props`: dinamikus érték

## Lépések

- Amennyiben azt szeretnénk, hogy a prop értéke reaktív legyen, a következőt kell tennünk
- Az `App.vue`ban létrehozunk egy reaktív változót:

```js
const title = ref()
```

- Majd a `v-bind` direktíva használatával adjuk át a gyermeknek:

```js
<MainNavigation :title="title" />
```

- Így amennyiben a szülőben változik a `title` értéke, az meg fog jelenni a gyermekben is:
- Ellenőrizzük is le egy `setTiemout()` segítségével, ami 5 másodperc múlva megváltoztatja a `title` értékét:

```js
setTimeout(() => {
  title.value = 'Test app'
}, 5000)
```

- Futtassuk a `dev` scriptet, és nézzük meg böngészőben az alkalmazást
- 5 másodperc múlva meg fog változni a `title` értéke, és ez a DOM-ban is megjelenik
