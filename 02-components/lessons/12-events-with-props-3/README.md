# Jegyzet

## Tartalom

- `props` és `events` együttes használata III.

## Lépések

- A `v-model` használata a szülő-gyermek kommunikációnál nagyon hasznos
- Alakítsuk át a kódot úgy, hogy ne csak egy, hanem 3 `InputField` mező legyen:
  - firstName
  - lastName
  - email
- Ezeket helyezzük el egy formon belül
- Legyen egy reaktív `formData` változónk, amelybe ezek az értékek kerülnek
- Használjuk fel a `v-model`-nél
- Készítsünk egy küldés gombot, amely csak annyit tesz, hogy kilogolja az űrlap adatait JSON-formátumban:

```js
<script setup>
import { reactive } from 'vue'
import InputField from './components/InputField.vue'

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
})

function submitForm() {
  console.log(JSON.stringify(formData))
}
</script>

<template>
  <form>
    <InputField
      id="firstName"
      v-model="formData.firstName"
      name="firstName"
      type="text"
      label="Firstname"
    />
    <InputField
      id="lastName"
      v-model="formData.lastName"
      name="lastName"
      type="text"
      label="Lastname"
    />
    <InputField
      id="email"
      v-model="formData.email"
      name="email"
      type="email"
      label="E-mail address"
    />
    <button @click="submitForm">Submit</button>
  </form>
</template>
```

- Így van egy komplett űrlapom, amelynek az adatait már küldhetem is el a backendnek
- A `InputField` pedig egy szép újrafelhasználható komponens
