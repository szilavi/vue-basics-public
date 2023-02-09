# Jegyzet

## Tartalom

- Kosárban lévő termék darabszámának módosítása

## Lépések

- Abban az esetben, ha a termák már a kosárban van, és a `count` jelenleg nem 0, akkor módosítanunk kell a kosárban lévő darabszámot
- Két függvényt adok a cart storehoz:
- A `getItemIndexById()` visszaadja a kosárban lévő termék indexét
- A `changeItemCount()` frissíti az adott id-jú elem darabszámát a kosárban

```js
function getItemIndexById(id) {
  return cart.value.findIndex((item) => item.id === id)
}

function changeItemCount(id, count) {
  const index = getItemIndexById(id)
  cart.value[index].count = count
}
```

- Módosítom a `handleCartButtonClick()`-et, hogy a megfelelő feltételek mellett ne hozzáadja, hanem módosítsa a termék darabszámát a kosárban

```js
function handleCartButtonClick(guitar) {
  const { id } = guitar
  const item = getItemById(id)
  if (!item && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
  } else if (item?.stock !== count.value && count.value > 0) {
    changeItemCount(id, count.value)
  }
}
```
