# Jegyzet

## Tartalom

- A `v-else-if` direktíva
- A `v-else` direktíva

## Lépések

- Ahogyan Vanilla JS esetében a feltételvizsgálatnak nemcsak `if`, hanem `else if` és `else` ága is van, úgy mindez megvalósítható Vue-ban is
- A raktárkészlet számától tesszük függővé, hogy mi legyen az a kód, amelyet szeretnénk megjeleníteni az oldalon
- Mind a szöveg, mind a szín legyen eltérő, ha 0, háromnál kevesebb vagy háromnál több van raktáron:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span v-if="guitar.stock === 0" style="color: red">Out of stock</span>
      <span v-else-if="guitar.stock < 3" style="color: orange">
        Last chance, only {{ guitar.stock }} left in stock
      </span>
      <span v-else style="color: green">In stock</span>
    </div>
  </div>
</div>
```
