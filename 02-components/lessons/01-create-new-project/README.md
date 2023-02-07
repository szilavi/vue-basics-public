# Jegyzet

## Tartalom

- Új projekt létrehozása

## Lépések

- Hozzunk létre egy új alkalmazást
- 3 komponenst fogunk készíteni, melyek az oldal 3 szekcióját (nav, main, footer) fogják reprezentálni
- A `assets` mappából csak a main.css-t tartsuk meg az alábbi tartalommal:

```css
body {
  margin: 0;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
}
```

- A `componenst` mappa tartalmát töröljük
- Az `App.vue` fájlon belül csak az üres `script`, `template` és `style` tag-eket hagyjuk meg
- Hozzunk benne létre 3 saját komponenst az alábbi névvel:
  - `MainNavigation.vue`
  - `SiteContent.vue`
  - `SiteFooter.vue`
- Alapértelmezés szerint a komponensek nevei legalább két szóból álljanak
- A `vbase-3-setup` code snippet segítségével le tudjuk generálni az SFC kiinduló kódját
- A kiinduló kódban a `template` és `script` helyzetét cseréljük fel
- Míg a Vue.js v2 esetében a `template` volt felül, addig Vue.js v3-ban a scriptet helyezzük konvenció szerint felülre, igaz a sorrend az alkalmazás működését nem befolyásolja

- A `MainNavigation.vue` fájl tartalma:

```vue
<template>
  <nav>
    <ul>
      <li>
        <a href="/">Vue app</a>
      </li>
      <li>
        <a href="https://www.training360.com/">Training360</a>
      </li>
      <li>
        <a href="https://vuejs.org/">Vue.js</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: lightgray;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: black;
  display: inline-block;
  font-size: 1.15rem;
  padding: 1rem;
  text-decoration: none;
}
</style>
```

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
