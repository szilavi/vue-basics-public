# Jegyzet

## Tartalom
- A store létrehozása
- A `vue-toastification` plugin

## Lépések
- A _database/guitars.json_ fájlban lesz néhány gitár, ezek lesznek a webshop termékei
- Most is telepítsük a json szervert: `npm i json-server`
- A _package.json_ fájlba hozzunk létre most is egy új scriptet: `"db": "json-server --watch database/guitars.json --port 3002"`
- Indítsuk is el, és így a szerveroldali résszel meg is vagyunk: `npm run db`
- Létrehozok egy _store_ mappát
- **Megjegyzés**: én az _src_ mellett hoztam létre, de az belül szebb 
- A mappán belül létrehozok egy _guitars.js_ fájlt
- Külön API klient, és apikat nem használok, ugyanis csak egy darab kérés lesz
- A `useGuitarsStore` függvényen belül megírom a `fetchGuitars`-t, ami a gitárokat fogja lekérdezni
- Itt a függvényen belül valósítom meg a hibakezelést, és a felhasználó értesítését az esetleges hibáról
- Az értesítéshez nem _alert_-et használok, hanem a `vue-toastification` plugint
- Telepítsük fel: `npm i vue-toastification`
- A `guitars` reaktív változó `readonly` lesz, nem akarom módosítani

```js
import { readonly, ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const guitars = ref([])

export function useGuitarsStore() {
  async function fetchGuitars() {
    try {
      const response = await fetch('http://localhost:3002/guitars')
      if (!response.ok) {
        throw new Error('Failed to fetch guitars')
      }
      guitars.value = await response.json()
    } catch (error) {
      toast.error(error.message)
    }
  }

  return {
    guitars: readonly(guitars),
    fetchGuitars,
  }
}
