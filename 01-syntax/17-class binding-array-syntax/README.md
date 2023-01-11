# Jegyzet

## Tartalom

- Class binding tömbbel

## Lépések

- Egy tömböt is hozzárendelhetünk az osztályhoz a következőféleképp:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="`guitar-${guitar.id}`">
      <h2>{{ guitar.name }}</h2>
      <div class="guitar__stock">
        <span
          :class="[ 'stock' , guitar.stock === 0 ? 'out-of-stock' : 'in-stock']"
        >
          {{ guitar.stock }} in stock
        </span>
      </div>
    </div>
  </div>
</div>
```

- A class attribútum és benne a stock átkerül a *class binding*hoz
- A *class binding*ál szögletes és nem kapcsos zárójelet használok
- Az első osztály amit megadok az a 'stock'
- Ezután használok egy ternary operátoré s a feltételtől függően az `out-of-stock` vagy az `in-stock` osztáyl is belekerül a *classList*be
