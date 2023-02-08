# Jegyzet

## Tartalom

- Adatok átadása a szülő komponensből a gyermek komponensnek a `props` segítségével

## Lépések

- Amennyiben azt szeretnénk, hogy a `MainNavigation` komponens ne statikusan a `Vue app `feliratot jelenítse meg, hanem a szülőből azaz az `App`-ből kapja azt a stringet, amit meg akarunk jeleníteni, megtehetjük ezt a `props` segítségével
- A `props` segítségével egy komponensnek adatokat tudunk átadni a szülő komponensből
- Ha az `App`-ból, mint szülő komponensből szeretnénk adatot átadni a `MainNavigation`-nejk, mint gyermekkomponensnek, ezt megtehetjük:

```js
<MainNavigation title="Vue app" />
```

- Ezután adjuk a következő kódot a `MainNavigation` elejére:

```js
defineProps({
  title: String,
})
```

- A komponensnek kötelezően kapnia kell egy `String` típusú, `title` nevű adatot
- A `defineProps()` segítségével tudjuk megadni, milyen névvel vár adatokat a komponens
- A `defineProps()` egy complier-macro, csak a script setup-on belül használható
- Bár a fenti megadási mód is megfelelő, sokkal strict-ebb lesz a kód, ha megadjuk az is, hogy ez a prop kötelező-e vagy sem:

```js
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
```

- Ezután a `MainNavigation` komponens első listaelemének kódját kell kicserélni a következőre:

  ```js
  <li>
    <a href="/">
      {{ title }}
    </a>
  </li>
  ```

- A compiler futásidőben validálni fogja a props értékeket
- Ahhoz, hogy mindig kötelező legyen a required megadása, a `.eslintrs.cjs` fájt módosítsuk
- Az `extends` első sora legyen a következő: `'plugin:vue/vue3-recommended'`
- Így mindig meg kell majd adni a `required` értékét is, és ha az `false`, akkor a `default`ot is
