# Jegyzet

## Tartalom

- Komponensek létrehozása

## Lépések

- Hozzunk létre a maradék két komponenst:

  - _SiteContent.vue_
  - _SiteFooter.vue_

- A _SiteContent.vue_ fájl tartalma:

```js
<template>
  <main>Content</main>
</template>

<style scoped>
main {
  padding: 1rem;
}
</style>
```

- A _SiteFooter.vue_ fájl tartalma:

```js
<template>
  <footer>Footer</footer>
</template>

<style scoped>
footer {
  background: lightgreen;
  padding: 1rem;
}
</style>
```

- Ha ezzel megvagyunk, állítsuk össze az alkalmazást ezen komponensek felhasználásával
- Az `App.vue` tartalmát módosítsuk:

```js
<script setup>
import MainNavigation from './components/MainNavigation.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteContent from './components/SiteContent.vue'
</script>

<template>
  <MainNavigation />
  <SiteContent />
  <SiteFooter />
</template>
```

- Importáltuk a 3 komponenst és felhasználtuk őket
- Futtassuk a `dev` scriptet, és nézzük meg böngészőben az alkalmazást
- A `dev` scriptet futtatva nagyon gyorsan elindul az alkalmazás,
- Ha bármelyik komponenst módosítjuk, akkor a - Hot Module Reload, melyet a Vite biztosít - nem fogja a teljes oldalt frissíteni a böngészőben, csak azt a modult, azt a részt frissíti, amelyik módosult.
- A Vue valójában egy úgynevezett Virtual DOM-ot használ. Ez hasonló, mint a hagyományos DOM. A különbség az, hogy a Vue a memóriában egy objektumban tárolja a alkalmazáson belül használt elemeket. Figyeli a komponensek állapotának változásait. Ha egy komponens állapota megváltozik, a Vue.js létrehoz egy második virtuális DOM-ot, amely tartalmazza a frissített adatokat. Aztán a Vue.js összehasonlítja a két virtuális DOM-ot, és kiszámítja a szükséges változtatásokat, majd frissíti a virtuális, aztán a valódi DOM-ot.
- A `dev` módban az alkalmazásból, a böngésző számára értelmezhető kód nem kerül fájlszinten kiírásra, ezt a Vite a memóriában tartja
- A fájlok ilyenkor nem lesznek optimalizálva, minify-olva
