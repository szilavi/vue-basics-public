# Jegyzet

## Tartalom
- A termékek hozzáadásának különleges feltételei
  
## Lépések

- A termék hozzáadásnak vannak speciális feltételei
- Akkor kell hozzáadni a kosárhoz, ha még nincs benne, egyébként frissíteni kell
- Ezenkívül, ha a `count` értéke 0 és így kattintunk a gombra, akkor törölnünk kell a terméket a kosárból
- Először le kell kérdeznünk, hogy a termék a kosárban van-e: ha nincs és a `count` nem 0, akkor kell csak meghívni a `addItemToCart()` függvényt
- A kosárhoz való hozzáadás, módosítás, törlés feltételeit az alábbiakban foglalhatjuk össze:
  - add:
    - ha még nincs a kosárban
    - és a count > 0
  - modify:
    - ha már a kosárban van
    - a count nem 0 és nem egyenlő a kosárban lévő darabszámmal
  - delete:
    - ha a kosárban van
    - és a count === 0
- Bővítem a store-t egy függvénnyel, amely a guitar `id` alapján megmondja, hogy az adott elem benne van-e a kosárban:

```js
function getItemById(id) {
  return cart.value.find((item) => item.id === id)
}
```

- Majd a `handleCartButtonClick()`-et kiegészítem a feltételekkel:

```js
function handleCartButtonClick(guitar) {
  if (!getItemById(guitar.id) && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
  }
  console.log(cart.value)
}
```
