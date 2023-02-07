# Jegyzet

## Tartalom

- `ref()` VS `reactive()`
- A `toRefs()` függvény

## Lépések

- Mikor használjuk a `ref()` és mikor a `reactive()` függvényt?

- REF:

  - primitívek esetében
  - objektumok esetében ha újra értéket akarunk adni a teljes változónak
  - mindig ki kell írni a `value`t az érték lekérdezéséhez a JS-en belül
  - a template-en belül a `value`-t nem kell kiírni, ez automatikusan megtörténik
  - a háttérben a `ractive()` függvényt hívja meg

- REACTIVE:

  - csak objektumok esetén használható
  - nem adhatunk új értéket neki
  - nem kell kiírni a `value`t sem a JS, sem a HTML fájlban

- A hivatalosan dokumentáció a `ref()`et primitívekhez ajánlja, míg a `ractive()`ot objektumokhoz, de vannak fejlesztők, akik a kód egységessége végett a `reactive()`ot egyáltalán nem használják
