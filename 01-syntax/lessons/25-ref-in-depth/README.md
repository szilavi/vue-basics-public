# Jegyzet

## Tartalom

- A `ref()`-ről részletesebben

## Lépések

- A html template-et módosítsuk annyiban, hogy a `v-model` ne egy objektum tulajdonságából kapja az értéket, és ezt írassuk is ki:

```html
<div id="app">
  <form ref="userForm" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="name" />
      <p>{{ name }}</p>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email" />
      <p>{{ email }}</p>
    </div>
    <div class="form-group">
      <button>Submit</button>
    </div>
  </form>
</div>
```

- Úgy kell majd átalakítani a JS kódot, hogy a `return` value így nézzen majd ki:

```js
return {
  name,
  email,
  userForm,
  handleSubmit,
}
```

- Nézzük meg, mit a helyzet, ha a `ref()` objektumot kap paraméterként:

```js
const formData = ref({
  name: '',
  email: '',
})
```

- Ebben az esetben a következőket tudjuk tenni:
- A `value`-n keresztül lecserélhetjük az objektumot:

```js
// VALID
formData.value = {
  name: 'Gáll Gergely',
  email: 'gergely.gall@training360.com',
}
```

- Módosíthatunk egy-egy tulajdonságot:

```js
// VALID
formData.value.name = 'Gáll Elza'
```

- Kiszervezhetjük a tulajdonságokat külön változókba, azonban ezek nem lesznek automatikusan reaktívak:

```js
// VALID, NOT REACTIVE
const name = formData.value.name
const email = formData.value.email
```

- Kiszervezhetjük a tulajdonságokat külön változókba úgy, hogy a `ref()`-nek paraméterként adjuk meg az adott tulajdonságot
- Ebben az eseten a kezdeti reaktív objektum, és a változók külön életet élnek:

```js
// VALID, REACTIVE, UGLY
const name = ref(formData.value.name)
const email = ref(formData.value.email)
```

- Kiszervezhetjük a tulajdonságokat külön változókba a `toRef()` függvény használatával, ebben az esetben akár a kezdeti objektum tulajdonsága, akár a most létrehozott változó értéke változik, mindkettő módosulni fog:

```js
// VALID, REACTIVE, UGLY, UPDATED
const name = toRef(formData.value, 'name')
const email = toRef(formData.value, 'email')
```

- Amennyiben több értéket szeretnénk kimenteni külön változókba, úgy a `toRef()` helyett célszerűbb a `toRefs()` használata:

```js
const { name, email } = toRefs(formData.value)
```

- **Megjegyzés**: Ezzel csak az űrlap értékei állnak vissza az alapértelmezettre, de a `userFormData`-n belül az adatok megmaradnak. A való életben a resetelénél a reaktív változó értékét állítjuk:

```js
function handleSubmit() {
  console.log(userFormData)
  formData.value = {
    name: '',
    email: '',
  }
}
```
