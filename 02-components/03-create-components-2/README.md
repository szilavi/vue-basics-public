# Jegyzet

## Tartalom

- Komponensek létrehozása

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
