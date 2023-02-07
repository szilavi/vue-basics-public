# Jegyzet

## Tartalom

- A `v-if` direktíva
- A `v-show` direktíva
- A `template` tag

## Lépések

- A `v-if` direktívához hasonló működést valósít meg a `v-show` direktíva
- Ez annyiban különbözik a `v-if`-től, hogy lerendereli ugyan az elemet, ha a feltétel hamis akkor is, de a `display` tulajdonságát `none`
- A kódot ilyenkor a következőképp kell átírni:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <template v-for="guitar in guitars" :key="guitar.id">
      <p v-show="guitar.stock > 0">{{ guitar.name }}</p>
    </template>
  </div>
</div>
```

- A `v-if`, ha a feltétel módosul, akkor erőforrás igényesebb, hiszen le kell renderelni az elemet, míg a `v-show` az oldal betöltésénél visz el több erőforrást, hiszen már akkor le kell renerelni az elemet, csak el kell rejteni
- ALapszabályként, ha a feltétel nem változik, akkor a `v-if`-et érdemes használni, ha a feltétel változik, azaz hol el kell rejteni, hol meg kell jeleníteni az elemet, akkor a `v-show` az optimálisabb megoldás
