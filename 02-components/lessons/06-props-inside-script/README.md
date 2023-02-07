# Jegyzet

## Tartalom

- A `props` elérése a scripten belül

## Lépések

- Lehetőségünk van nem csak a `tempalte`-ben, hanem a scriptben is felhasználni a `props`okat
- A legelső menü elemre kattintva egyszerűen csak egy alert ablakban jelenítsük meg a `title` értékét
- Írjuk meg a függvényt, amely lefut majd kattintása:

```js
function alertTitle() {
  alert(title)
}
```

- Rögtön látjuk is, hogy a VSCode hibát fog jelezni, hogy nincs `title` nevű változó
- Ha a scripten belül el akarjuk érni a props értékeket, akkor egy változóhot kell hozzárendelni:

```js
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
```

- Így a `props`on keresztül már elérhető lesz a `title`:

```js
function alertTitle() {
  alert(props.title)
}
```

- Módosítsuk a legelső menü elemet:

```vue
<li>
  <a href="/" @click="alertTitle">
    {{ title }}
  </a>
</li>
```

- A `title` helyett a `props.title` is írhatjuk, de a tempalte-ben ez nem kötelező,
  azonban ha lenne egy `title` nevű reactive változónk, akkor a kettő megkülönböztetése végett már muszáj a `props.title`-t használni
