# Jegyzet

## Tartalom

- Új projekt inicializálása
- Mockaroo - adatok legenerálása
- json-server telepítése
- db script írása

## Lépések

- A [https://www.mockaroo.com/](https://www.mockaroo.com/) oldalon generáljuk le 1000 user adatát
- Az adatok a következők legyenek:
  - id
  - firstName
  - lastName
  - emailAddress
- Az adatokat JSON-formátumban mentsük el
- Hozzunk létre az alkalmazáson belül egy backend mappát
- Ezen belül helyezzük el a JSON-fájlt `users` névvel
- Figyeljünk a helyes JSON-formátumra, a fájl eleje:

```json
{
  "users": [
    {
```

- Készítsünk róla egy másolatot is a biztonság kedvéért `users.json.bak` névvel
- Telepítsük a `json-server` csomagot
- A `package.json` fájlba írjunk egy új scriptet: `"db": "json-server --watch backend/database/users.json --port 3001"`
- A `json-server` a 3001-es portot fogja figyelni, és a JSON-fájlt fogja adatbázisként használni
- Indítsuk el a db scriptet: `npm run db`
- A böngészőben ellenőrizzük, hogy elérhetőek-e az adatok: [localhost:3001/users](localhost:3001/users)
