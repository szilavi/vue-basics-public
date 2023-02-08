# Jegyzet

## Tartalom
- router-view

## Lépések
- Még meg kell adnunk, hogy a belső navigáció esetében hova töltődjön be az adott view
- Ezt az App-on belül adom meg:

```html
<template>
  <MainNavigation />
  <main>
    <router-view></router-view>
  </main>
</template>
```
- A `router-link`re kattintva a `router-view`ba töltődik be az adott View komponens