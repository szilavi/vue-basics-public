# Jegyzet

## Tartalom
- Kosárba helyezhető termékek darabszám intervallumának megadása

## Lépések
- Nem szabad engedni, hogy a darabszám 0 alá menjen
- Nem szabad engedni, hogy a darabszám a készleten lévő darabszám fölé menjen
- Ezt egy `watch` segítségével be tudom szabályozni:

```js
watch(count, () => {
  const minCount = 0
  const maxCount = props.guitar.stock
  if (count.value < minCount) {
    count.value = minCount
  } else if (count.value > maxCount) {
    count.value = maxCount
  }
})
```