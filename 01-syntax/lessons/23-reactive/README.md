# Jegyzet

## Tartalom

- A `reactive()` függvény

## Lépések

- Több input mező esetében - vagy ha összetartozó adatok vannak - érdemes a primitívek helyett objektumot használni
- Így a kiíratás is egyszerűbb lesz:

```js
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const formData = ref({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(formData.value)
    }

    return {
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
```

- A HTMl kódban így az objektum egyes tulajdonságaira kell hivatkozni:

```html
<div id="app">
  <form action="" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="formData.name" />
      <p>{{ formData.name }}</p>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="formData.email" />
      <p>{{ formData.email }}</p>
    </div>
    <div class="form-group">
      <button>Submit</button>
    </div>
  </form>
</div>
```

- A küldésnél látjuk, hogy a konzolon ott lesz az összes adat egy Proxy-n belül
- Azonban amennyiben objektumot akarunk használni az összetartozó adatok tárolására, a `ref()` helyett használhatjuk a `reactive()` függvényt is
- A `reactive()` a `ref()`hez hasonlóan reaktív változót hoz létre, azonban van néhány különbség
- A `reactive()` értéke mindig egy objektum kell legyen, valamint nem kell a `value`-t kiírni, ha el akarjuk érni a benne tárolt adatot:

```js
const { createApp, reactive } = Vue

const app = createApp({
  setup() {
    const formData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(formData)
    }

    return {
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
```

- A végeredmény ugyanaz lesz
