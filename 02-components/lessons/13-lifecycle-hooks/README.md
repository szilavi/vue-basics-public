# Jegyzet

## Tartalom

- Lifecycle hookok

## Lépések

- A `Vue.js` komponenseknek meghatározott életciklusa van
- [A teljes életciklus diagram itt érhető el](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
- Úgynevezett `hook`ok segítségével az egyes életciklus szakaszok előtt, és után **közvetlenül**, lehetőségünk van a saját kódunkat futtatni
- A főbb életciklusok a következők:

  - `beforeMount()`: Mielőtt a komponens fel lenne csatolva a DOM-ba
  - `mounted()`: Miután a komponens fel lett csatolva a DOM-ba, és le lett renderelve
  - `beforeUpdate()`: Mielőtt a komponens és a DOM frissül
  - `updated()`: Miután a komponens frissült, és a DOM is frissült
  - `beforeUnmount()`: Mielőtt a komponens kikerül a DOM-ból
  - `unmounted()`: Miután a komponens kikerült a DOM-ból

- Mikor használjuk őket? :

  - `beforeMount()`: Kezdőértékeket állíthatunk be (nem lesz újra renderelés, ha módosul az adat)
  - `mounted()`: Kezdőértékek beállítására szolgál (side effect-ek lehetnek itt) mellékhatásokat, leggyakrabban API hívásokat indítunk pl adatokat kérünk el a szerverről. (újra lesz renderelve, ha változik az adat)
  - `beforeUpdate()`: Módosítás visszavonásánál hasznos ("undo" feature), manuálisan bele lehet nyúlni a DOMba, ha szükséges el is tudjuk menteni az előző értéket
  - `updated()`: Adatok küldése a szervernek frissítés után, vagy módosíthatjuk a DOM-ot
  - `beforeUnmount()`: Itt érdemes "takarítani", eseményfigyelőket, időzítőket leállítani, hálózati kéréseket leállítani, állapot mentése
  - `unmounted()`: Bármire, amit nem tettünk mega `beforeUnmount`-ban, esetleg a szervert értesíteni a törlésről, vagy logolás

- Hozzunk létre egy új alkalmazást
- Töröljük a szükségtelen kódokat
- Hozzunk létre egy `AppTitle` komponenst
- Mindössze egy `title` reaktív változónk legyen
- A Vue API az adott életciklusokhoz egy-egy függvényt is biztosít
- Elsőként az `onBeforeMount`, és az `onMounted` `hook`okat nézzük meg

```js
<script setup>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'

const title = ref('Title')

onBeforeMount(() => console.log('before mount'))
onMounted(() => console.log('mounted'))
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

- Az App komponens a következő:

```js
<script setup>
import { ref } from 'vue'
import AppTitle from './components/AppTitle.vue'
</script>

<template>
  <AppTitle />
</template>
```

- Mielőtt megjelenne a DOM-ban, lefut az `onBeforeMount()`ban lévő kód
- Miután megjelent a DOM-ban, lefut az `onMounted()`ban lévő kód
- Importáljuk az `onBeforeUpdate()` és az `onUpdated()` függvényeket is, és írjunk hozzájuk is egy egyszerű kódot

```js
onBeforeUpdate(() => console.log('before update'))
onUpdated(() => console.log('updated'))
```

- Hogy tényleg lefusson ez a két függvény, valaminek módosulnia kell a komponensben
- Használjunk egy egyszerű `setTimeout()`ot, ami 3 másodperc múlva megváltoztatja a `title` értékét

```js
setTimeout(() => (title.value = 'New title'), 3000)
```

- A böngészőben most már két újabb sor is meg fog jelenni
- Importáljuk az `onUnmounted` és az `onUpdated()` függvényeket
- Ha egy komponenst a `v-if` direktívához kötötten jelenítünk, vagy rejtünk el, akkor belekerül, avagy kikerül a DOM-ból, azaz `mounted`, vagy `unmounted` lesz
- Egészítsük ki az `App`ot, egy `isTitleVisible` változóval, melynek értékéhez kötjük az `AppTitle` komponens megjelenítését
- Egy `setTimeout()`tal ennek az érétkét is módosítsuk

```js
<script setup>
import { ref } from 'vue'
import AppTitle from './components/AppTitle.vue'

const isTitleVisible = ref(true)

setTimeout(() => (isTitleVisible.value = false), 5000)
</script>

<template>
  <AppTitle v-if="isTitleVisible" />
</template>
```

- Most már mind a 6 életciklus függvény lefut, és logol a konzolra
- Az egyik leggyakoribb eset, az `onMounted()` használata, itt szoktuk az API hívásokat megtenni, hogy a szerverről jövő adatokat mielőbb fel tudjuk dolgozni
