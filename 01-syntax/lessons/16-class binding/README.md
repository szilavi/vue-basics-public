# Jegyzet

## Tartalom

- Class binding

## Lépések

- Egyszerűsítsük az alkalmazást annyival, hogy minden esetben írja ki, hogy hány darab gitár van készleten: ha 0, akkor az `out-of-stock`, ha nullánál több, akkor az `in-stock` osztályt helyezzük el rajta
- Ehhez a *class binding*-ot használjuk
- A _class binding_ hasonlít az egyszerű _attribute binding_-hoz
- A példa kedvéért a CSS-fájl legyen a következő:

```css
.stock {
  font-size: 1.15rem;
}

.out-of-stock {
  color: red;
}

.in-stock {
  color: green;
}
```

- A HTML-kód:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span class="stock" :class="{'out-of-stock': guitar.stock === 0}">
        {{ guitar.stock }} in stock
      </span>
    </div>
  </div>
</div>
```

- A `span` tag-re minden esetben rákerül a `stock` class
- Majd a class binding-nál - itt is látható a kettőspont - kapcsos zárójelek között megadom, hogy kerüljön rá az `out-of-stock` class, ha 0-nál több termék van raktáron
- Azoknak a termékeknek a mennyisége, amelyek nincsenek raktáron, pirossal fog megjelenni
- Amennyiben szeretnénk, hogy a raktáron lévő termékek megkapják az `in-stock` class-t, és zöld színnel jelenjenek meg, tegyük a következőt:

```html
<div id="app">
  <h1>Guitars</h1>
  <div class="guitars">
    <div v-for="guitar in guitars" :key="guitar.id">
      <h2>{{ guitar.name }}</h2>
      <span
        class="stock"
        :class="{'out-of-stock': guitar.stock === 0, 'in-stock': guitar.stock !== 0}"
      >
        {{ guitar.stock }} in stock
      </span>
    </div>
  </div>
</div>
```

- A kapcsos zárójeleken belül vesszővel elválasztva egy új osztálynév és a feltétel szerepel
