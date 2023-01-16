# Jegyzet

## Tartalom

- `events`: gyermek szülő közötti kommunikáció

## Lépések

- Amennyiben nem a szülőből szeretnénk a gyermeknek adatot átadni, hanem a gyermekből a szülőnek, azt egyedi események létrehozásával tudjuk megtenni
- A gyermekben egyedi eseményeket definiálunk, melyek bekövetkezésétől a szülő értesül, és lefuttathatja a szükséges kódot
- Hozzunk létre egy új alkalmazást
- A `assets` mappából csak a main.css-t tartsuk meg az alábbi tartalommal:

```css
body {
  margin: 0;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
```

- A `componenst` mappa tartalmát töröljük
- Hozzunk létre egy új komponenst: `InputField.vue`
- A komponens kódja a következő:

```js
<script setup>
defineEmits(['on-focus'])
</script>

<template>
  <input type="text" @click="$emit('on-focus')" />
</template>
```

- Van egy `defineEmits()` compiler-macro, mely egy tömb paramétert vár, melyben felsorolhatjuk a komponensünk által kibocsájtott egyedi eseményeket
- Ezután az inputon belül felvesszük a `@click` eseményfigyelőt, tehát amikor belekattintunk az űrlapelembe, akkor kibocsájtja az egyedi `on-focus`eseményt, melyről a szülő értesül
- Az esemény neve bármi lehetne, kebabCase névmegadást használunk
- Az `App.vue` kódja legyen a következő:

```vue
<script setup>
import InputField from './components/InputField.vue'

function alertMessage() {
  alert('Input has focused')
}
</script>

<template>
  <InputField @on-focus="alertMessage" />
</template>
```

- A szülőben felhasználom az `InputField` komponenst
- Amikor bekövetkezik az egyedi `on-focus` esemény, meghívom az itt - azaz a szülőben - definiált`alertMessage` függvényt
