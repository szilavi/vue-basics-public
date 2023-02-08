# Jegyzet

## Tartalom
- A `GitarsListView` komponens
- A router bejegyzés

## Lépések
- A `views` mappán belül hozzuk létre egy _GuitarsListView.vue_ fájlt 
_ Ennek a tartalma:

```html
<script setup></script>
<template>
  <div>GuitarsList</div>
</template>

<style scoped></style>
```

- A router mappán belül az index.js fájlban írjuk meg az első routing-ot
- A főoldalon a `GitarsListView` komponens legyen betöltve
- A `path` az útvonal, aminél az adott komponensnek be kell töltődnie 
- A `component`, hogy melyik komponens töltődjön be
- A `name` az útvonal neve, ez opcionális, viszont érdemes mindig megadni, így a későbbiekben már hivatkozhatunk erre a `path`-bél megadott útvonal helyett is

```js
  {
    path: '/',
    name: 'guitarsList',
    component: GitarsListView,
  },
``` 