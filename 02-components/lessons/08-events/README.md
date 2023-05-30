# Jegyzet

## Tartalom

- `events`: gyermek-szülő közötti kommunikáció

## Lépések

- Amennyiben nem a szülőből szeretnénk a gyermeknek adatot átadni, hanem a gyermekből a szülőnek, azt egyedi események létrehozásával tudjuk megtenni
- A gyermekben egyedi eseményeket definiálunk, amelyek bekövetkezéséről a szülő értesül, és lefuttathatja a szükséges kódot
- Hozzunk létre egy új alkalmazást
- Az _assets_ mappából csak a _main.css_-t tartsuk meg az alábbi tartalommal:

```css
body {
  margin: 0;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
```

- A `components` mappa tartalmát töröljük
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

- Van egy `defineEmits()` compiler macro, amely egy tömb paramétert vár, amelyben felsorolhatjuk a komponensünk által kibocsájtott egyedi eseményeket
- Ezután az inputon belül felvesszük a `@click` eseményfigyelőt, tehát amikor belekattintunk az űrlapelembe, akkor kibocsájtja az egyedi `on-focus` eseményt, amelyről a szülő értesül
- Az esemény neve bármi lehetne, kebab-case névmegadást használunk
- Az _App.vue_ kódja legyen a következő:

```js
<script setup>
import InputField from './components/InputField.vue'

function alertMessage() {
  alert('Input has focus')
}
</script>

<template>
  <InputField @on-focus="alertMessage" />
</template>
```

- A szülőben felhasználom az `InputField` komponenst
- Amikor bekövetkezik az egyedi `on-focus` esemény, meghívom az itt - azaz a szülőben - definiált `alertMessage` függvényt
