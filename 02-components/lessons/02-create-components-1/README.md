# Jegyzet

## Tartalom

- Komponensek létrehozása

## Lépések

- Hozzuk létre az első saját komponensünket az alábbi névvel:
  - _MainNavigation.vue_
- Alapértelmezés szerint a komponensek nevei legalább két szóból álljanak
- A _Single File Component_-ök az alábbi 3 fő részt tartalmazhatják:

  - ```<script setup></script>```: A komponens JS-/Vue.js-kódja
  - ```<template></template>```: A komponens HTML-kódja
  - ```<style scoped></style>```: A komponens CSS-kódja. A scoped-dal azt állítjuk, hogy ez a kód nem globálisan érvényes, hanem csak a komponensen belül. A globálisan érvényes CSS-kódok az `assets` mappán belül találhatóak

- A `vbase-3-setup` code snippet segítségével le tudjuk generálni az SFC kiinduló kódját
- A kiinduló kódban a `template` és `script` helyzetét cseréljük fel
- Míg a Vue.js v2 esetében a `template` volt felül, addig Vue.js v3-ban a scriptet helyezzük konvenció szerint felülre, igaz, a sorrend az alkalmazás működését nem befolyásolja

- A _MainNavigation.vue_ fájl tartalma:

```js
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

- Az `App.vue` tartalmát módosítsuk:

```js
<script setup>
import MainNavigation from './components/MainNavigation.vue'
</script>

<template>
  <header>
    <MainNavigation />
  </header>
</template>
```

- Futtassuk a `dev` scriptet, és nézzük meg böngészőben az alkalmazást
- A tartalmat helyezzük középre, adjuk meg a main.css-ben a `position: relative;` beállítást az `#app`-nek
