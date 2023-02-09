# Jegyzet

## Tartalom

- `props` és `events` együttes használata II.

## Lépések

- Kicsit módosítsuk a kódot
- Használjuk a `v-model` direktívát a dolgok egyszerűsítésére:
- Az `email` értékét rögtön a `template`-be bele is írom, hogy látszódjon a változás

```js
<script setup>
import { ref } from 'vue'
import InputField from './components/InputField.vue'

const email = ref('')
</script>

<template>
  <InputField
    id="email"
    v-model="email"
    name="email"
    type="email"
    label="E-mail address"
  />
  {{ email }}
</template>
```

- Nincs egyedi esemény, amit mi magunk írtunk volna, azonban lehetőségünk van mégis összekapcsolni az `InputField`ben lévő értéket az `App`ban lévő változóval
- A `v-model` segítségével a tárolt érték a `modelValue` keresztül elérhető
- Amikor egy gyermek komponensnél használjuk, akkor ezt az értéket a propként is elérhetjük
- Csak vegyük fel a `modelValue`t a gyermekben
- Majd, amikor frissül az adat, erről a szülőt értesíteni kell, ehhez pedig a `update:modelValue` eseményt használhatjuk:

```js
<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
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

defineEmits(['update:modelValue'])
</script>

<template>
  <label :for="id">{{ label }}:</label>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
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

- Ahogy szerkesztjük a mező értékét, az adat rögtön módosul is
