# Jegyzet

## Tartalom

- `props` és `events` együttes használata I.

## Lépések

- Alakítsuk át úgy a kódot `InputField` komponens a szőlőből kapja meg az alábbi attribútumok értékét:
  - `name`
  - `id`
  - `type`
- Valamint legyen még egy `prop` a `label`
- Mindegyik kötelező legyen, és `String` típusú
- Az input tag felett jelenlen meg a `label` tag is, a benne megjelenő szöveg a `label prop` értéke legyen
- A teljes kód:

```js
<script setup>
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

defineEmits(['on-input'])

const name = ref('')
</script>

<template>
  <label :for="id">{{ label }}:</label>
  <input
    :id="id"
    v-model="name"
    :name="name"
    :type="type"
    @input="$emit('on-input', name)"
  />
</template>

<style scoped>
label {
  display: block;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
}
</style>
```

- Ennek megfelelően alakítsuk át az *App.vue*t is:

```js
<script setup>
import InputField from './components/InputField.vue'

function logMessage(name) {
  console.log(name)
}
</script>

<template>
  <InputField
    id="email"
    name="email"
    type="email"
    label="E-mail address"
    @on-input="logMessage"
  />
</template>
```

- Indítsuk el az alkalmazást
- Nyissuk meg a devtool, és kattintsunk a Console fülre
- Ahogy az input mező értékét változtatjuk, a konzolon mindig megjelenik az új érték
- Ami nem szép, hogy a `logMessage` paramétere mindig `name`. az `InputField` komponensen belül is mindig `name` a reaktív változó neve is, pedig jelen esetben is egy email mezőt használunk
- A gyermekben nincs szükség a reaktív változóra, csak a szülőben akarom elérni az értéket, így töröljük is, és az input value-ját adjuk át mindig az `$event`ön keresztül:

```js
<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

defineEmits(['on-input'])
</script>

<template>
  <label :for="id">{{ label }}:</label>
  <input
    :id="id"
    :name="name"
    :type="type"
    @input="$emit('on-input', $event.target.value)"
  />
</template>
```

- Így a szülőben elérhetem a gyermekben lévő értéket - Ráadásul az `InputField`
  komponens nagyon jól újra felhasználható lett
- Módosítom még az `App` komponenst is, és ott hozom létre a reaktív változót, és egy függvény segítségével módosítom mindig, ha új érték lesz:

```js
<script setup>
import InputField from './components/InputField.vue'
import { ref } from 'vue'

const email = ref('')

function updateEmail(value) {
  email.value = value
  console.log(email.value)
}
</script>

<template>
  <InputField
    id="email"
    name="email"
    type="email"
    label="E-mail address"
    @on-input="updateEmail"
  />
</template>
```
