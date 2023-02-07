# Jegyzet

## Tartalom

- Vue alkalmazás inicializálása
- A `createApp()` metódus
- A `mount()` metódus
- A `setup()` metódus
- Text interpolation

## Lépések

- Készítsünk egy új mappát a projekt könyvtárunkban vuejs-basic néven
- Nyissuk meg a mappát VSCodeban
- Hozzunk létre egy fájlt `index.html` néven
- Készítsünk el egy egyszerű html struktúrát:

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Init Vue app</title>
  </head>

  <body></body>
</html>
```

- Linkeljük be a head-be a következőt:

```js
<script src="https://unpkg.com/vue@3"></script>
```

- Ez nem más, mint a Vue lebuildelt kódja
- Így már használatba is vehetjük
- Hozzunk létre az index.html mellett egy _main.js_ fájlt
- Ennek a tartalma legyen a következő:

```js
const app = Vue.createApp({
  setup() {
    const message = 'Vue is sooo cooool!'
    return {
      message,
    }
  },
})

app.mount('#app')
```

- A `Vue` objektum globálisan elérhető, hiszen a `head`-be belinkeltük a `Vue`-t
- A `createApp` metódus hozza létre magát az alkalmazást
- A `createApp` egy options objectet kap paraméterként
- Az options objectet jelenleg egy metódust tartalmaz: `setup()`
- Ezen belül létrehozunk egy `message` változót, és értéket adunk neki
- A `setup()` visszatérési értéke egy objektum, mely azokat az adatokat tartalmazza, melyeket a komponensen belül globálisan el szeretnénk érni
- Ez jelenleg csak a `message` lesz, melynek az értékét meg akarom jeleníteni
- Amit fel kell csatolnunk a DOM-ba, hogy valahol az oldalon belül életre megjelenjen, működjön az alkalmazás. Egész pontosan az `app` id-jú elembe helyezzük el.
- Ezután adjuk hozzá a body-hoz a következőt:

```html
<div id="app">
  <p>{{ message }}</p>
</div>
```

- Valamint a `body` zárótag elé linkeljük be a `main.js` fájlt
- A dupla kapcsos zárójelek az úgynevezett text interpolation szintaxisa
- A kapcsos zárójelek közé most egy `message` nevű változónak az értékét szeretném megjeleníteni, de bármilyen JavaScriptben használatos kifejezést írhatunk bele
- Linkeljük be a `main.js`-t az `index.html` állományba
- Indítsuk el a Live Servert
- A `message` változó értéke megjelenik az oldalon
