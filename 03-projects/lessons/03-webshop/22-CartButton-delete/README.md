# Jegyzet

## Tartalom

- Termék törlése a kosárból

## Lépések

- Bővítem a cart store-t a `removeFromCart()`-tal, amely az adott Id-jű elemet törli a kosárból

```js
function removeFromCart(id) {
  const index = getItemIndexById(id)
  cart.value.splice(index, 1)
}
```

- A `handleCartButtonClick()`-et kiegészítem a törlés feltételével
- Ha töröljük az elemet a kosárból, akkor a gomb szövegét módosítani kell:

```js
function handleCartButtonClick(guitar) {
    const basketItem = getItemById(guitar.id)
    if (!basketItem && count.value > 0) {
        addItemToCart(guitar, count.value)
        buttonText.value = 'Update cart'
    } else if (
        basketItem?.count != count.value &&
        basketItem?.stock >= count.value &&
        count.value > 0
    ) {
        changeItemCount(guitar.id, count.value)
    } else if (basketItem && count.value === 0) {
        removeFromCart(guitar.id)
        buttonText.value = 'Add to cart'
    }
}
```
