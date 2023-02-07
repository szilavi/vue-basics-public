# Jegyzet

## Tartalom

- A `reactive()` függvény

## Lépések

- Annyival egészítsük ki még a kódot, hogy a küldés után reseteljük az űrlapot
- Ehhez nem lesz szükség semmilyen JS metódusra (`querySelector()`, `getElementById()`, stb.), hogy mindezt megvalósítsuk, sőt az event objektumot sem foguk paraméterként átadni, hogy azon keresztül érjük el a formot
- Ezek helyett létrehozok egy új reaktív változót a JS-ben `userForm` névvel:

```js
const { createApp, reactive, ref } = Vue

const app = createApp({
  setup() {
    const userForm = ref()
    const userFormData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(userFormData)
      userForm.value.reset()
    }

    return {
      userForm,
      userFormData,
      handleSubmit,
    }
  },
})

app.mount('#app')
```

- Ezt a változó pedig megadom a form elem `ref` tulajdonságánál

```html
<div id="app">
  <form ref="userForm" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="email">Név: </label>
      <input type="text" name="name" id="name" v-model="userFormData.name" />
    </div>
    <div class="form-group">
      <label for="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="userFormData.email"
      />
    </div>
    <div class="form-group">
      <button>Küldés</button>
    </div>
  </form>
</div>
```

- Így a `userForm` nem mást fog tárolni, mint a form elemet
- Ez az úgynevezett _template ref_
