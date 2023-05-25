# Jegyzet

## Tartalom

- `v-for` használata többdimenziós tömbök (és beágyazott objektumok) esetében

## Lépések

- Vegyünk fel egy többdimenziós tömböt, amely a különböző nyelveknél használt keretrendszereket tartalmazza:

```js
const app = Vue.createApp({
  setup() {
    const frameworks = [
      ['Vue', 'React', 'Angular'],
      ['Laravel', 'Symfoy', 'Yii'],
      ['Flask', 'Django', 'FastAPI'],
    ]

    return {
      frameworks,
    }
  },
})

app.mount('#app')
```

- Szeretnénk 3 darab listát készíteni: mind a 3 lista tartalmazza egy-egy tömb összes elemét, tehát mind a 3 lista 3 elemet fog tartalmazni:

```html
<div id="app">
  <ul
    v-for="(frameworkArray, frameworkArrayIndex) in frameworks"
    :key="frameworkArrayIndex"
  >
    <li
      v-for="(framework, frameworkIndex) in frameworkArray"
      :key="frameworkIndex"
    >
      {{ framework }}
    </li>
  </ul>
</div>
```

- Látható, hogy ugyanúgy, mint Vanilla JS-ben, itt is lehet beágyazott for ciklust, azaz `v-for` direktívát használni
- A `key`-t és a generált indexet használtam mind a két esetben egy prefixszel
