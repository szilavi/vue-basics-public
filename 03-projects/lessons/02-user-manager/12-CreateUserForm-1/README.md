# Jegyzet

## Tartalom
- A `CreateUserForm` komponens
- `reactive()` változónak új érték adása

## Lépések
- Készítsük egy új komponenst: `CreateUserForm`
- Ez a komponens egy űrlap, ahol az új felhasználó adatait meg kell adni
- A scriptben az űrlapelemek kezdőértékeit egy `userFormDataInitialState` nveű objektumba helyezem el
- Létrehozom a `userFormData` reaktív változót, ezúttal nem a ref() hanem a reactive() segítségével
- A reative()-nak paraméterként megadom a `userFormDataInitialState`-et
- Az űrlap láthatóságát egy boolean típusú reaktív változóhoz kötöm, ez az `isFormVisible`
- Magát a formot egy template ref-en keresztül elérhetővé teszem, ez a `createUserForm`
- Két metódusom lesz, a `showForm()`, ami az `isFormVisible` értékét állítja
- Valamint a `handleFormSubmit()`
- A `handleFormSubmit()` megvizsgálja majd, hogy a form valid-e, amennyiben igen, úgy elküldi az új felhasználó adatait a szervernek, és elrejtésre kerül a form
- A `Object.assign` segítségével megtehetjük, hogy a reactive()-al létrehozott változóknak is új értéket adjunk


```js
<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '../../store/user'

const userFormDataInitialState = {
  emailAddress: '',
  firstName: '',
  lastName: '',
}

const { addUser } = useUserStore()
const userFormData = reactive({ ...userFormDataInitialState })
const isFormVisible = ref(false)
const createUserForm = ref()

function showForm() {
  isFormVisible.value = true
}

async function handleFormSubmit() {
  try {
    if (createUserForm.value.checkValidity()) {
      await addUser(userFormData)
      Object.assign(userFormData, userFormDataInitialState)
      isFormVisible.value = false
    }
  } catch (error) {
    alert(error.message)
  }
}
```

- Maga a template nem bonyolult
- Egy gombra van szükségünk, amire kattintva az űrlap megjelenik
- Valamint az űrlapra magára:

```html
<template>
  <button class="btn btn-lg btn-primary mb-3" @click="showForm">
    Create new user
  </button>
  <form
    v-show="isFormVisible"
    ref="createUserForm"
    @submit.prevent="handleFormSubmit"
  >
    <div class="mb-3">
      <label for="emailAddress">Email address</label>
      <input
        id="emailAddress"
        v-model="userFormData.emailAddress"
        type="email"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="firstName">First name</label>
      <input
        id="firstName"
        v-model="userFormData.firstName"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <label for="lastName">Last name</label>
      <input
        id="lastName"
        v-model="userFormData.lastName"
        type="text"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
      <button class="btn btn-primary bt-lg">Save</button>
    </div>
  </form>
</template>
```