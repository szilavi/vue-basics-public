# Jegyzet

## Tartalom

- A `router-view` tesztelése linkekkel

## Lépések

- Két oldalam lesz, így a routerben két view-ra és két router-bejegyzésre van szükség
- A `view` mappán belül hozzunk létre egy új view-t:

```html
<script setup></script>
<template>
  <div>CartView</div>
</template>

<style scoped></style>
```

- És kell az új router-bejegyzés is
- Azokat a view-komponenseket, amelyekre kezdetben nincs szükség, felesleges előre betölteni
- Lehetőségünk van ezeket dinamikusan importálni:

```js
routes: [
  {
    path: '/',
    name: 'guitarsList',
    component: GitarsListView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
  },
],
```

- A `MainNavigation` komponensen belül hozzunk létre egy új listaelemet, benne a `router-link`-kel:

```html
<li class="nav__item">
  <router-link class="nav__link" :to="{ name: 'cart' }">Cart</router-link>
</li>
```

- Most már tesztelhetjük a két belső linket
