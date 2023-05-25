# Jegyzet

## Tartalom

- `v-for` destructuring

## Lépések

- Adott a következő `main.js` fájl:

```js
const app = Vue.createApp({
  setup() {
    const frameworks = [
      {
        id: 1,
        name: 'Vue',
        relaseDate: '2014-02-24T23:00:00.000Z',
        color: '#42b883',
      },
      {
        id: 2,
        name: 'React',
        relaseDate: '2013-05-28T22:00:00.000Z',
        color: '#61dafb',
      },
      {
        id: 3,
        name: 'Angular',
        relaseDate: '2016-09-14T22:00:00.000Z',
        color: '#dd1b16',
      },
    ]

    return {
      frameworks,
    }
  },
})

app.mount('#app')
```

- Amennyiben nem akarjuk az objektumok összes tulajdonságát kiírni, vagy nem szeretnénk kiírni például azt, hogy `framework.name`, `framework.relaseDate` stb., és egyszerűen csak a tulajdonság nevével akarunk a template-ben hivatkozni ezekre, akkor használhatjuk az átstrukturálást a `v-for` esetében is:

```html
<div id="app">
  <ul>
    <li v-for="{ id, name } in frameworks" :key="`framework-${id}`">
      {{ id }}. {{ name }}
    </li>
  </ul>
</div>
```

- Természetesen, ha szükségünk van az indexre valamilyen okból, mondjuk, ezt szeretnénk használni az objektum id-je helyett key-ként, akkor ilyenkor is megadhatunk egy második alias-t:

```js
 <li v-for="({name}, index) of frameworks" :key="`framework-${index}`">
     {{ index + 1}}. {{ name }}
  </li>
```
