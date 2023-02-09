# Jegyzet

## Tartalom

- Termék törlése a kosárból

## Lépések

- Bővítem a cart store, a `removeFromCart()`al, ami adott id-jú elemet töröl a kosárból

```js
function removeFromCart(id) {
  const index = getItemIndexById(id)
  cart.value.splice(index, 1)
}
```

- A `handleCartButtonClick()`-et kiegészítem a törlés feltételével
- Ha töröljük az elemet a kosárból, akkor a gomb szövegét módosítani kell

```js
function handleCartButtonClick(guitar) {
  const { id } = guitar
  const item = getItemById(id)
  if (!item && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
  } else if (item?.stock !== count.value && count.value > 0) {
    changeItemCount(id, count.value)
  } else if (item && count.value === 0) {
    removeFromCart(id)
    buttonText.value = 'Add to cart'
  }
}
```
