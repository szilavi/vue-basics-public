# Jegyzet

## Tartalom

- A `CartButton` komponens template-je

## Lépések

- A `CartButton` komponens template-je 3 gombot tartalmaz
- Ezen kívül még egy input mezőre lesz szükség, ahol megjeleni, hány darab terméket akarunk a kosárba tenni / mennyi termék van jelenleg a kosárban

```js
<template>
  <div class="cart">
    <button>-</button>
    <input type="text" />
    <button>+</button>
    <button class="add-to-cart">Add to cart</button>
  </div>
</template>

<style scoped>
button {
  padding: 0.25rem 1rem;
  background: var(--dark);
  border: 1px solid var(--dark);
  color: var(--light);
}

button:active {
  background: var(--light);
  color: var(--dark);
}

buttom:hover {
  cursor: pointer;
}

input {
  border: 1px solid var(--dark);
  padding: 0.25rem;
  border-radius: 0;
  width: 5ch;
  text-align: center;
}

.add-to-cart {
  margin: 0 0 0 1rem;
}
</style>
```
