# Jegyzet

## Tartalom

- Class binding

## Lépések

- Egyszerűsítsük az alkalmazást annyival, hogy minden esetben kiírja, hány darab gitár van készleten, azonban a 0, akkor az `out-of-stock` ha nullánál több, akkor az `in-stock` osztályt helyezzük el rajta
- Ehhez a *class binding*ot Használjuk
- A *class binding* hasonló, mint az egyszerű _attribute binding_
- A példa kedvéért a CSS fájl legyen a következő:

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

- A html kód:

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

- A `span` tagre minden esetben rákerül a `stock` class
- Majd a class bindingnál - itt is látható a kettőspont - kapcsoszárójelek között megadom, hogy kerüljön rá az `out-of-stock` class, ha 0-nál több termék van raktáron
- Azok a termékeknek a mennyisége, amik nincsenek raktáron, pirossal fog megjelenni
- Amennyiben szeretnénk, hogy a raktáron lévő termékek megkapják az `in-stock` classt, és zöld színnel jelenjenek meg, tegyük a következőt:

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

- A kapcsoszárójeleken belül, vesszővel elválasztva egy új osztálynév, és a feltétel
