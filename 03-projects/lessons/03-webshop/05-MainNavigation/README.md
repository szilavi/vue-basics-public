# Jegyzet

## Tartalom

- A `MainNavigation` komponens
- Belső navigáció: `router-link`

## Lépések

- Készítsünk egy új komponenst `MainNavigation` névvel
- Itt készítjük el az oldal belső navigációját
- Amennyiben nem külső oldalra készítünk hivatkozást, nem az `a` tag-et, hanem a `router-link`-et használjuk, amit a `vue-router`biztosít
- A router-link esetében megadhatjuk a hivatkozást akár a router fájlban definiált `path`re, de célszerűbb helyett a `name`re hivatkozni:

```js

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" :to="{ name: 'guitarsList' }">
          Guitars
        </router-link>
      </li>
    </ul>
  </nav>
</template>
```

- A _main.css_ fájlban létrehozok néhány változót a színeknek
- Majd megírom a komponens stílusát

```css
:root {
  --green: #069e10;
  --dark: #213547;
  --light: #fefefe;
}
```

```css
<style scoped>
.nav {
  background: var(--dark);
}

.nav__list {
  margin: 0;
  padding: 1rem 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__item {
  padding: 0 1rem;
}

.nav__link {
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 500;
}
</style>
```

- Az `App`ba importáljuk a `MainNavigation` komponenst és használjuk is fel:

```html
<template>
  <MainNavigation />
</template>
```

- A _main.css_-t kibővítem néhány alapértelmezett értékkel:

```css
html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  color: var(--green);
}
```
