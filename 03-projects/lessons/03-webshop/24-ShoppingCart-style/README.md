# Jegyzet

## Tartalom
- A `ShoppingCart` komponens formázása

## Lépések
- Formázom a megjelenő táblázatot:

```html
<style scoped>
.cart {
  display: flex;
  align-items: center;
  flex-direction: column;
}

th,
td {
  padding: 0.25rem 1rem;
}

tfoot {
  font-weight: bold;
  font-size: 1.25rem;
  text-align: right;
}
</style>

```
