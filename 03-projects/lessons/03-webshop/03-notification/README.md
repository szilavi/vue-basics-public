# Jegyzet

## Tartalom

- A `Toast` használata az alkalmazásban
- Gitárok kilogolása

## Lépések

- A `vue-toastification`-t nem egy komponensen, hanem a store-on belül használom
- A `vue-toastification` fájljait importáljuk a `main.js` fájlba:

```js
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
```

- Majd az `app.mount()`-ban tegyük az alkalmazás számára elérhetővé a `Toast`ot:

```js
app.use(Toast)
```

- Az _App.vue_-n belül logoljuk ki a gitárokat
- Az `onMounted()` hookon belül meghívom a `fetchGuitars`-t:

```js
<script setup>
import { onMounted } from 'vue'
import { useGuitarsStore } from '../store/guitars'

const { guitars, fetchGuitars } = useGuitarsStore()

onMounted(async () => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>
```
