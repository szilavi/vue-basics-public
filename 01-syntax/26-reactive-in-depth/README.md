# Jegyzet

## Tartalom

- A `reactive()`-ről részletesebben

## Lépések

- A `ref()`-et kiveséztük, nézzük meg ugyanígy a `reactive()`-et is

```js
const formData = reactive({
  name: '',
  email: '',
})
```

- `reactive()` esetében nincs lehetőségünk a reassignementre, ez hibát fog eredményezni:

```js
// NOT VALID
formData = { name: 'Gáll Gergely', email: 'gergely.gall@training360.com' }
```

- Viszont az objektum egyes tulajdonságait módosíthatjuk:

```js
// VALID
formData.name = 'Gáll Elza'
```

```js
// VALID, NOT REACTIVE
const name = formData.name
const email = formData.email
```

- Kiszervezhetjük a tulajdonságokat külön változókba, azonban ezek nem lesznek automatikusan reaktívak:

```js
// VALID, REACTIVE
const name = ref(formData.name)
const email = ref(formData.email)
```

- A `reactive()` paraméterként mindig objektumot kell kapjon, primitívvel nem működik, ez hibát eredményez:

```js
// NOT VALID
const name = reactive(formData.name)
const email = reactive(formData.email)
```

- Kiszervezhetjük a tulajdonságokat külön változókba a `toRef()` függvény használatával, ebben az esetben akár a kezdeti objektum tulajdonsága, akár a most létrehozott változó értéke változik, mindkettő módosulni fog:

```js
// VALID, REACTIVE, UPDATE, UGLY
// const name = toRef(formData, 'name')
// const email = toRef(formData, 'email')
```

- Amennyiben több értéket szeretnénk kimenteni külön változókba, úgy a `toRef()` helyett célszerűbb a `toRefs()` használata:

```js
const { name, email } = toRefs(formData)
```
