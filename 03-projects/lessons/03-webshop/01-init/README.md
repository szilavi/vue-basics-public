# Jegyzet

## Tartalom

- Alkalmazás inicializálása
- Router
- View

## Lépések

- Inicializáljunk egy új Vue alkalmazást _webshop_ névvel, most a router-t is válasszuk ki a telepítés során
- Telepítsük a függőségeket, konfiguráljuk az eslint-et, és a prettiert
- Töröljük a felesleges állományokat
- Az _src_ mappában most van egy `router` és egy `views` mappa
- A routerben konfiguráljuk majd, hogy milyen útvonalon milyen nézet komponens töltődjön be
- Egyelőre maradjon itt ennyi:

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
```

- A _view_ mappában a nézet komponensek lesznek, amelyeket arra használunk, hogy más komponenseket fogjunk össze, csoportosítsunk, és ezeket töltjük majd be az egyes útvonalakon
- Egyelőre a mappa legyen üres
- Az `App` tartalma is legyen egy üres template
