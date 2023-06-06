# Jegyzet

## Tartalom

- Eseménymódosítók

## Lépések

- Legyen két input mező egy helyett, és amikor az űrlapot elküldjük, egyszerűen csak írassuk ki az értékeket a konzolra
- A JS-kód:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')
    const email = ref('')

    function handleSubmit(event) {
      event.preventDefault()
      console.log(`name: ${name.value}, email: ${email.value}`)
    }

    return {
      name,
      email,
      handleSubmit,
    }
  },
})

app.mount('#app')
```

- A `handleSubmit()` fog felelni a submit esemény kezeléséért, ez írja ki a konzolra az értékeket
- A HTML-kód:

```html
<div id="app">
  <form action="" @submit="handleSubmit($event)">
    <div class="form-group">
      <label for="email">Név: </label>
      <input type="text" name="name" id="name" v-model="name" />
      <p>{{ name }}</p>
    </div>
    <div class="form-group">
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" v-model="email" />
      <p>{{ email }}</p>
    </div>
    <div class="form-group">
      <button>Submit</button>
    </div>
  </form>
</div>
```

- A `handleSubmit()` megkapja paraméterként az `$event`et, ez a speciális változó tartalmazza az event objektumot
- Rendezzük az űrlapelemeket középre, egymás alá
- Hozzunk létre egy CSS-fájlt _style.css_ névvel, és linkeljük is be:

```css
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  display: block;
}

.form-group {
  margin: 1rem 0 0 0;
}
```

- Ha kitöltjük az űrlapot és a küldés gombra kattintunk, a konzolon megjelenik a két mező neve és értéke
- A `preventDefault()`-ra azért volt szükség, hogy küldés után ne töltődjön újra az oldal
- Ez utóbbira azonban van egy szebb megoldás
- A Vue úgynevezett `event modifier`-öket is definiál, amelyek közül az egyik a `prevent`
- A módosított HTML-kódban látható, hogy a submit után ponttal megadtam a módosítót:

```html
<div id="app">
  <form action="" @submit.prevent="handleSubmit">
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

- Így pedig a JS-kód is letisztul:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('')
    const email = ref('')

    function handleSubmit() {
      console.log(`name: ${name.value}, email: ${email.value}`)
    }

    return {
      name,
      email,
      handleSubmit,
    }
  },
})

app.mount('#app')
```
