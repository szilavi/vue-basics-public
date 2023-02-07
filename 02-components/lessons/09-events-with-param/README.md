# Jegyzet

## Tartalom

- `events`: paraméterek

## Lépések

- Természetesen lehetőségünk van paraméterek átadására is egyedi eseményeknél
- Hozzunk létre egy reaktív `name` változót az `InputField` komponensen belül
- Majd használjunk két irányú adatkötést
- Most ne a `click` hanem az `input` esemény figyeljük, amikor ez bekövetkezik a komponens kibocsájtja az egyedi `on-input` eseményt, további argumentumként a `name`-et is megadjuk

```vue
<script setup>
import { ref } from 'vue'

defineEmits(['on-input'])

const name = ref()
</script>

<template>
  <input v-model="name" type="text" @input="$emit('on-input', name)" />
</template>
```

- A szülő automatikusan megkapja a paramétereket, csak arra kell figyelni, hogy a függvény definíciónál is megadjuk őket, jelenleg a `name`-et

```vue
<script setup>
import InputField from './components/InputField.vue'

function logMessage(name) {
  console.log(name)
}
</script>

<template>
  <InputField @on-input="logMessage" />
</template>
```

- Futtassuk az alkalmazást, nyissunk egy devtool és látható, hogy az input minden változásánál egy újabb sor jelenik meg a logon
