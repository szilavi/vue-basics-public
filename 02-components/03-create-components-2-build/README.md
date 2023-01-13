# Jegyzet

## Tartalom

- Komponensek létrehozása
- Az alkalmazás lebuildelése

## Lépések

- Hozzunk létre a maradék két komponenst:

  - `SiteContent.vue`
  - `SiteFooter.vue`

- A `SiteContent.vue` fájl tartalma:

```vue
<template>
  <main>Content</main>
</template>

<style scoped>
main {
  padding: 1rem;
}
</style>
```

- A `SiteFooter.vue` fájl tartalma:

```vue
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

```vue
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
- A `dev` módben az alkalmazásból, a böngésző számára értelmezhető kód nem kerül fájlszinten kiírásra, ezt a Vite a memóriában tartja
- A fájlok ilyenkor nem lesznek optimalizálva, minifyolva
- Ha egy új verziót adunk ki az alkalmazásból, és a neten elérhetővé akarjuk tenni, akkor viszont szükség van a fájlokra
- Ezen fájlok előállítását, és optimalizálását hívjuk build folyamatnak
- Futtassuk le a `build` parancsot? `npm run build`
- Létrejön a `dist` mappa, benne a szükséges fájlokkal
- Azok a fájlok, melyek a Vite által lettek feldolgozva (nem a public mappában voltak) optimalizált formában, egy hash-el ellátva jelennek meg
- A `preview` script futtatásával pedig megtekinthetjük böngészőben a lebuildelt alkalmazást
