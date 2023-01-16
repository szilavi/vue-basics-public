# Jegyzet

## Tartalom

- Az alkalmazás lebuildelése
- A lebuildelt verzió megtekintése

## Lépések

- Ha egy új verziót adunk ki az alkalmazásból, és a neten elérhetővé akarjuk tenni, akkor szükség van a fájlokra
- Ezen fájlok előállítását, és optimalizálását hívjuk build folyamatnak
- Futtassuk le a `build` parancsot? `npm run build`
- Létrejön a `dist` mappa, benne a szükséges fájlokkal
- Azok a fájlok, melyek a Vite által lettek feldolgozva (nem a public mappában voltak) optimalizált formában, egy hash-el ellátva jelennek meg
- A `preview` script futtatásával pedig megtekinthetjük böngészőben a lebuildelt alkalmazást